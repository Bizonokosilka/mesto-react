import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup (props) {
    const avatarInputRef = React.useRef(null);

    function handleSubmit (event) {
        event.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarInputRef.current.value,
        });
    }

    return (
        <PopupWithForm 
            title={'Обновить аватар'} 
            name={'avatar'} 
            isOpen={props.isOpen} 
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__input-container">
                <input 
                    className="popup__form-item popup__form-item_el_link"
                    ref={avatarInputRef}
                    type="url" 
                    name="avatar" 
                    placeholder="Ссылка на картинку" 
                    required 
                />
                <span className="popup__error"/>
            </label>
            <input 
                className="popup__save-btn" 
                type="submit" 
                value="Сохранить" 
                name="submit"
            />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;