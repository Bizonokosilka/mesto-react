import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    const handleLikeClick = () => {
        props.onCardLike(props.card);
    }

    const handleDeleteClick = () => {
        props.onCardDelete(props.card);
    }

    const handleClick = () => {
        props.onCardClick(props.card);
    }

    return (
        <li className="elements__item">                            
                <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
                <button className={`${isOwn ? `elements__trash-btn_active` : `elements__trash-btn`}`} type='button' onClick={handleDeleteClick}/> 
                <div className="elements__footer">
                    <p className="elements__title">{props.card.name}</p>
                    <div className="elements__like-container">  
                        <button className={`${isLiked ? `elements__like-btn_active` : `elements__like-btn`}`} type="button" onClick={handleLikeClick} />
                        <span className="elements__like-count">{props.card.likes.length}</span>
                    </div> 
                </div>
            </li>
    );
}

export default Card;        


