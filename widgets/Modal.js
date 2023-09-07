import React from 'react';
import ReactDOM from 'react-dom';
// import "../styles/widgets/_modal.scss";

const Modal = ({ modal, isShowing, hideFunc }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    
    <div className="modal-overlay">
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">

        <div className="modal-content">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hideFunc}>
          
          </button>
          {modal}
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;