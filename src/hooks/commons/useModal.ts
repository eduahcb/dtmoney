import { useState, useCallback } from 'react'

type UseModalResult = {
  open: boolean
  openModal: () => void
  closeModal: () => void
}

export const useModal = (initialState?: boolean): UseModalResult => {
  const [open, setOpen] = useState(initialState ?? false)

  const openModal = useCallback(() => setOpen(true), [])

  const closeModal = useCallback(() => setOpen(false), [])

  return {
    open,
    openModal,
    closeModal
  }
}
