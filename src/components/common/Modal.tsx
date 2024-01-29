import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

function findOrCreateModalRoot() {
  const modalRoot = document.getElementById('modal-root')
  if (modalRoot != null) return modalRoot

  const newModalRoot = document.createElement('div')
  newModalRoot.setAttribute('id', 'modal-root')
  document.body.appendChild(newModalRoot)
  return newModalRoot
}

const modalRoot = findOrCreateModalRoot()

interface ModalPresenterProps {
  onClose: () => void
}

export function ModalPresenter({
  onClose,
  children,
}: PropsWithChildren<ModalPresenterProps>) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export function Modal({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) {
  if (!isOpen) return null
  return createPortal(
    <ModalPresenter onClose={onClose}>{children}</ModalPresenter>,
    modalRoot,
  )
}
