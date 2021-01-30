import React from 'react';
import Card from './Card';
import api from '../utils/api';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {    
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        const promise = isLiked ? api.dislikeCard(card._id) : api.likeCard(card._id);
        promise
            .then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);        
            setCards(newCards);
        })
        .catch((err) => {
            console.log(`${err}`);
        });       
    } 

    function handleCardDelete (card) {
        api.deleteCard(card._id)
            .then(() => {
                const deleteCards = cards.filter((c) => c._id !== card._id);
                setCards(deleteCards);
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }

    React.useEffect(() => {
        api.getCards()
            .then((cards) => {
            setCards(cards);
        })
        .catch((err) => {
            console.log(`${err}`);
        });
    }, [])

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})` }} />
                <div className="profile__info">                            
                    <h2 className="profile__name">{currentUser.userName}</h2>
                    <button className="profile__edit-btn" type="button" onClick={props.onEditProfile} />
                    <p className="profile__about">{currentUser.about}</p>                            
                </div>
                <button className="profile__add-btn" type="button" onClick={props.onAddPlace} />
            </section>

            <section className="elements">
                <ul className="elements__list"> 
                    {cards.map((card) => (
                    <Card key={card._id} onCardClick={props.onCardClick} card={card} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
                    )
                )}
                </ul>
            </section>

        </main>
    );
}


export default Main;

