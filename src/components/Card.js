import React from 'react';

function Card(props) {
    const handleClick = () => {
        props.onCardClick(props.card);
    }

    return (
        <li className="elements__item">                            
                <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
                <button className="elements__trash-btn" type='button'/> 
                <div className="elements__footer">
                    <p className="elements__title">{props.card.name}</p>
                    <div className="elements__like-container">  
                        <button className="elements__like-btn" type='button'/>
                        <span className="elements__like-count">{props.card.likes.length}</span>
                    </div> 
                </div>
            </li>
    );
}

export default Card;        

