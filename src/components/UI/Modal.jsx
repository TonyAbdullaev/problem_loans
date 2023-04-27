import React from "react";
export const Modal = ({children, visible, setVisible}) => {
    return (
        <div
            className={`.modal_wrapper ${visible ? '.modal_wrapper.active' : ''}`}
            onClick={() => setVisible(false)}
        >
            <div
                className='modal__content'
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}