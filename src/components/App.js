import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteConfirmPopup from "./DeleteConfirmPopup";
import ImagePopup from './ImagePopup';
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState([]);
    const [cards, setCards] = React.useState([]);    

    React.useEffect(() => {
        api.getCards()
            .then((cards) => {
            setCards(cards);
        })
        .catch((err) => {
            console.log(`${err}`);
        });
    }, [])

    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
            setCurrentUser(userInfo);
        })
        .catch((err) => {
            console.log(`${err}`);
        });
    }, [])

    function handleEditAvatarClick () {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick () {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick () {
        setAddPlacePopupOpen(true);
    }

    function handleDeletePopupOpenClick (props) {
        setDeletePopupOpen(true);
        setSelectedCard(props);
    };

    function handleCardClick (props) {
        setImagePopupOpen(true);
        setSelectedCard(props);
    }

    function closeAllPopups () {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(false);
        setDeletePopupOpen(false);
        setImagePopupOpen(false);
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        const promise = isLiked ? api.dislikeCard(card._id) : api.likeCard(card._id);
        promise
            .then((newCard) => {
            const newCards = cards.map((item) => item._id === card._id ? newCard : item);        
            setCards(newCards);
        })
        .catch((err) => {
            console.log(`${err}`);
        });       
    } 

    function handleCardDelete (card) {
        api.deleteCard(card._id)
            .then(() => {
                const deleteCards = cards.filter((item) => item._id !== card._id);
                setCards(deleteCards);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }

    function handleUpdateUser (userInfo) {
        api.setUserInfo(userInfo)
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }

    function handleUpdateAvatar (inputValue) {
        api.setAvatar(inputValue)
            .then((avatar) => {
                setCurrentUser(avatar);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`${err}`);
            })            
    }; 


    function handleAddPlaceSubmit (inputValue) {
        api.createCard(inputValue)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`${err}`);
            })            
    };


    return (
        <div className="page">

            <div className="place-container">

                <CurrentUserContext.Provider value={currentUser}>

                    <Header/>

                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleDeletePopupOpenClick} 
                        cards={cards}
                    />

                    <Footer/>  

                    <EditProfilePopup 
                        isOpen={isEditProfilePopupOpen} 
                        onClose={closeAllPopups} 
                        onUpdateUser={handleUpdateUser}
                    />

                    <AddPlacePopup 
                        isOpen={isAddPlacePopupOpen} 
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                    />

                    <EditAvatarPopup 
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                    />

                    <ImagePopup 
                        isOpen={isImagePopupOpen}
                        onClose={closeAllPopups}
                        card={selectedCard}                         
                    />

                    <DeleteConfirmPopup
                        isOpen={isDeletePopupOpen}
                        onClose={closeAllPopups}                        
                        onCardDelete={handleCardDelete}
                        card={selectedCard}
                    />

                </CurrentUserContext.Provider>
                    
            </div>

        </div>
    );
}

export default App;