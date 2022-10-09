import React, { ReactNode, ReactElement, FC } from 'react'

import ModalComponent from 'react-modal'

import CloseImage from 'assets/close.svg'

import {
  style,
  StyledModalCloseButton
} from './style'

import { ModalHeader } from './ModalHeader'
import { ModalContent } from './ModalContent'

type ModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

interface ModalSubComponents {
  Header: typeof ModalHeader
  Content: typeof ModalContent
}

const Modal: FC<ModalProps> & ModalSubComponents = ({ children, isOpen, onClose }: ModalProps): ReactElement => {
  ModalComponent.setAppElement('#root')

  return (
    <ModalComponent
      isOpen={isOpen}
      onRequestClose={onClose}
      style={style }
    >
      <StyledModalCloseButton onClick={onClose}>
        <img src={CloseImage} alt="close modal" />
      </StyledModalCloseButton>
      {children}
    </ModalComponent>
  )
}

Modal.Header = ModalHeader
Modal.Content = ModalContent

export { Modal }
