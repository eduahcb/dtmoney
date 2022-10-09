import React, { ReactElement } from 'react'

import { Modal } from 'components/atoms/Modal'
import { Button } from 'components/atoms/Button'
import { useModal } from 'hooks/commons'

export default {
  title: 'Components/Modal',
  component: Modal
}

type ModalProps = {
  title: string
}

export const usage = ({ title }: ModalProps): ReactElement => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { open, openModal, closeModal } = useModal(false)

  return (
    <>
      <Button color='primary' onClick={openModal}>open modal</Button>
      <div id='root'>
        <Modal isOpen={open} onClose={closeModal}>
          <Modal.Header>{ title }</Modal.Header>
          <Modal.Content>
            <p>this is a content</p>
          </Modal.Content>
        </Modal>
      </div>
    </>
  )
}

usage.args = {
  title: 'Título'
}
