import React from 'react';

function Card({ card, onCardClick }) {
    const handleClick = () => {
        onCardClick(card);
    }

    return (
        <li className="elements__item">                            
                <img className="elements__image" src={card.link} alt={card.name} onClick={handleClick} />
                <button className="elements__trash-btn" type='button'/> 
                <div className="elements__footer">
                    <p className="elements__title">{card.name}</p>
                    <div className="elements__like-container">  
                        <button className="elements__like-btn" type='button'/>
                        <span className="elements__like-count">{card.likes.length}</span>
                    </div> 
                </div>
            </li>
    );
}

export default Card;           