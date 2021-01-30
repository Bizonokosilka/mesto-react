import React from 'react';

function PopupWithForm(props) {    

    return (
        <section className={`${props.isOpen ? `popup popup_${props.name} popup_opened` : `popup popup_${props.name}`}`}>
            <div className="popup__container">
                <button className="popup__close-btn" type="button" onClick={props.onClose}/>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_${props.name}`} action="#" name={`${props.name}`} onSubmit={props.onSubmit} noValidate>
                    {props.children}
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;