import React from 'react';

function PopupWithForm({name, isOpen, onClose, title, children }) {
    return (
        <section className={`${isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}`}>
            <div className="popup__container">
                <button className="popup__close-btn" type="button" onClick={onClose}/>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form_${name}`} action="#" name={`${name}`} noValidate>
                    {children}
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;