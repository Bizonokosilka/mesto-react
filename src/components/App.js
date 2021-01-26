import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState();
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState();
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();
    const [selectedCard, setSelectedCard] = React.useState(false);

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    const closeAllPopups = () => {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(false);
    }

    return (
        <div className="page">

            <div className="place-container">

                <Header/>

                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick} />

                <Footer/>  

                <PopupWithForm title={'Редактировать профиль'} name={'edit'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>                    
                    <label className="popup__input-container">
                        <input className="popup__form-item popup__form-item_el_name" type="text" name="name" minLength="2" maxLength="20" pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                        <span className="popup__error" />
                    </label>
                    <label className="popup__input-container">
                        <input className="popup__form-item popup__form-item_el_about" type="text" name="about" minLength="2" maxLength="200" pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                        <span className="popup__error" />
                    </label>
                    <input className="popup__save-btn popup__save-btn_loaded" type="submit" value="Сохранить" name="submit" />
                </PopupWithForm>

                <PopupWithForm title={'Новое место'} name={'add'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                    <label className="popup__input-container">
                        <input className="popup__form-item popup__form-item_el_name" type="text" name="name" placeholder="Название" minLength="1" maxLength="30" pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                        <span className="popup__error" />
                    </label>
                    <label className="popup__input-container">
                        <input className="popup__form-item popup__form-item_el_picture_link" type="url" name="link" placeholder="Ссылка на картинку" required />
                        <span className="popup__error" />
                    </label>
                    <input className="popup__save-btn popup__save-btn_loaded" type="submit" value="Сохранить" name="submit" />
                </PopupWithForm>

                <PopupWithForm title={'Вы уверены?'} name={'prevent'}>
                    <input className="popup__save-btn" type="submit" value="Да" name="submit" />
                </PopupWithForm>

                <PopupWithForm title={'Обновить аватар'} name={'avatar'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                    <label className="popup__input-container">
                        <input className="popup__form-item popup__form-item_el_link" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                        <span className="popup__error" />
                    </label>
                    <input className="popup__save-btn popup__save-btn_loaded" type="submit" value="Сохранить" name="submit" />
                </PopupWithForm>

                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

            </div>
        </div>
    );
}

export default App;