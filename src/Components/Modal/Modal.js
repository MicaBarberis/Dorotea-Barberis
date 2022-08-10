const Modal = ({title, close, children}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Modal;