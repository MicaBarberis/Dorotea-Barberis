import './Modal.css'

const Modal = ({title, close, children}) => {
    return(
        <div id="modal1" className="modal-custom">
            <h2>{title}</h2>
            <div className='modal-content'>
            <button className="close-modal" onClick={()=>close(false)}>x</button>
            </div>
            {children}
        </div>
    )
}

export default Modal;