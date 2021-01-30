import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup (props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    
    function handleInputNameChange (event) {
        setName(event.target.value);
    };

    function handleInputAboutChange (event) {
        setDescription(event.target.value);
    };

    function handleSubmit (event) {
        event.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    };

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);
    
    return (

        <PopupWithForm 
            title={'Редактировать профиль'} 
            name={'edit'} 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            onSubmit={handleSubmit}
        >                    
            <label className="popup__input-container">
                <input 
                    className="popup__form-item popup__form-item_el_name" 
                    name="name" 
                    type="text" 
                    value={name} 
                    onChange={handleInputNameChange}
                    minLength="2"
                    maxLength="20"
                    pattern="^[A-Za-zА-Яа-яЁё\s\D]+$"
                    required
                />
                <span className="popup__error" />
            </label>
            <label className="popup__input-container">
                <input 
                    className="popup__form-item popup__form-item_el_about" 
                    name="about" 
                    type="text" 
                    value={description} 
                    onChange={handleInputAboutChange}
                    minLength="2" 
                    maxLength="200" 
                    pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" 
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
};

export default EditProfilePopup;