
import React, { useCallback,  useState } from 'react'
import Modal from '../widgets/Modal';
const ModalContext = React.createContext();


const ModalProvider = props => {
  const [modal, setModal] = useState()
  const unSetModal = useCallback(() => {
    setModal()
  }, [setModal])

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props} >
      {props.children}
      {modal && <Modal modal={modal} isShowing={true} hideFunc={unSetModal} />}
    </ModalContext.Provider>
  )
}

const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}

export { ModalProvider, useModal }
