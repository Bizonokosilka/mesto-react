import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup (props) {
    const nameInputRef = React.useRef(null);
    const linkInputRef = React.useRef(null);

    function handleSubmit (event) {
        event.preventDefault();
        props.onAddPlace({
            name: nameInputRef.current.value,
            link: linkInputRef.current.value
        })
    }

    return (
        <PopupWithForm 
            title={'Новое место'} 
            name={'add'} 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            onSubmit={handleSubmit}
        >
            <label className="popup__input-container">
                <input 
                    className="popup__form-item popup__form-item_el_name"
                    ref={nameInputRef} 
                    type="text" 
                    name="name" 
                    placeholder="Название" 
                    minLength="1" 
                    maxLength="30" 
                    pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" 
                    required 
                />
                <span className="popup__error" />
            </label>
            <label className="popup__input-container">
                <input 
                    className="popup__form-item popup__form-item_el_picture_link"
                    ref={linkInputRef}  
                    type="url" 
                    name="link" 
                    placeholder="Ссылка на картинку" 
                    required 
                />
                <span className="popup__error" />
            </label>
            <input 
                className="popup__save-btn popup__save-btn_loaded" 
                type="submit" 
                value="Сохранить" 
                name="submit" 
            />
        </PopupWithForm>
    )
}

export default AddPlacePopup;