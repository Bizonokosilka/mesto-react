import React from 'react';

function ImagePopup({ card, onClose }) {    
    return (
        <section className={card ? "popup popup_picture popup_opened" : "popup popup_picture"}> 
                <figure className="popup__full-image-figure">           
                <button className="popup__close-btn" type="button" onClick={onClose} />                
                <img className="popup__full-image" src={card.link} alt={card.name} />
                <figcaption className="popup__caption">{card.name}</figcaption>
                </figure>
        </section>
    );
}

export default ImagePopup;