import React from 'react';
import Card from './Card';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) { 

    const currentUser = React.useContext(CurrentUserContext);    

    return (
        <main className="content">

            <section className="profile">
                <div 
                    className="profile__avatar" 
                    onClick={props.onEditAvatar} 
                    style={{ backgroundImage: `url(${currentUser.avatar})`}} 
                />
                <div className="profile__info">                            
                    <h2 className="profile__name">{currentUser.name}</h2>
                    <button 
                        className="profile__edit-btn" 
                        type="button" 
                        onClick={props.onEditProfile} 
                    />
                    <p className="profile__about">{currentUser.about}</p>                            
                </div>
                <button 
                    className="profile__add-btn" 
                    type="button" 
                    onClick={props.onAddPlace} 
                />
            </section>

            <section className="elements">
                <ul className="elements__list"> 
                    {props.cards.map((card) => (
                        <Card 
                            key={card._id} 
                            onCardClick={props.onCardClick} 
                            card={card} 
                            onCardLike={props.onCardLike} 
                            onCardDelete={props.onCardDelete}
                        />
                    )
                )}
                </ul>
            </section>

        </main>
    );
}

export default Main;