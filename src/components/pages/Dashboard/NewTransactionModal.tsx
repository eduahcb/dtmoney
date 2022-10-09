/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { ReactElement, useState } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Modal } from 'components/atoms/Modal'
import { Input } from 'components/atoms/Input'
import { Button } from 'components/atoms/Button'

import IncomeImage from 'assets/income.svg'
import OutcomeImage from 'assets/outcome.svg'

import { FormGroup, Grid, RadioBox } from './style'

import { schema } from 'validators/transaction'

type NewTransactionModalProps = {
  isOpen: boolean
  closeModal: () => void
  createTransaction: (transaction: any) => Promise<void>
}

type FormInputs = {
  title: string
  amount: number
  type: 'deposit' | 'withdraw'
  category: string
}

export const NewTransactionModal = ({ isOpen, closeModal, createTransaction }: NewTransactionModalProps): ReactElement => {
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')
  const { register, handleSubmit } = useForm<FormInputs>({ resolver: yupResolver(schema) })

  const handleCreateTransaction = (data: FormInputs): void => {
    data.type = type

    createTransaction(data)
      .then(() => {
        closeModal()
      })
      .catch(error => console.error(error))
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Modal.Header>Cadastrar transação</Modal.Header>
      <Modal.Content>

        <form onSubmit={handleSubmit(handleCreateTransaction)}>

          <FormGroup>
            <Input {...register('title')} placeholder='Nome' />
          </FormGroup>

          <FormGroup>
            <Input {...register('amount')} placeholder='Preço' />
          </FormGroup>

          <Grid>
            <RadioBox
              title="Entrada"
              img={IncomeImage}
              onClick={() => setType('deposit')}
              isActive={ type === 'deposit'}
            />

            <RadioBox
              title="Saída"
              img={OutcomeImage}
              onClick={() => setType('withdraw')}
              isActive={ type === 'withdraw'}
            />
          </Grid>

          <FormGroup>
            <Input {...register('category')} placeholder='Categoria' />
          </FormGroup>

          <FormGroup>
             <Button color='secondary'>Cadastrar</Button>
          </FormGroup>

        </form>

      </Modal.Content>
    </Modal>
  )
}
