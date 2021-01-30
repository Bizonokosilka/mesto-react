import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteConfirmPopup (props) {
    function handleSubmit (event) {
        event.preventDefault();
        props.onCardDelete(props.card);
    };

    return (
        <PopupWithForm 
            title={'Вы уверены?'} 
            name={'prevent'} 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            onSubmit={handleSubmit}>
            <input 
                className="popup__save-btn" 
                type="submit" 
                name="submit" 
                value="Да"/>
        </PopupWithForm>
    )
}

export default DeleteConfirmPopup;