import React from 'react';

function ImagePopup(props) {
    return (
        <section className={props.card ? "popup popup_picture popup_opened" : "popup popup_picture"}> 
                <figure className="popup__full-image-figure">           
                <button className="popup__close-btn" type="button" onClick={props.onClose} />                
                <img className="popup__full-image" src={props.card.link} alt={props.card.name} />
                <figcaption className="popup__caption">{props.card.name}</figcaption>
                </figure>
        </section>
    );
}

export default ImagePopup;