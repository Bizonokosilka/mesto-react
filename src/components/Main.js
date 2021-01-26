import React from 'react';
import Card from './Card';
import Api from '../utils/Api';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([Api.getUserInfo(), Api.getCards()])
            .then(([userInfo, cards]) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);

            setCards(cards);
        })
        .catch((err) => {
            console.log(`${err}`);
        });
    }, [])

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} />
                <div className="profile__info">                            
                    <h2 className="profile__name">{userName}</h2>
                    <button className="profile__edit-btn" type="button" onClick={onEditProfile} />
                    <p className="profile__about">{userDescription}</p>                            
                </div>
                <button className="profile__add-btn" type="button" onClick={onAddPlace} />
            </section>

            <section className="elements">
                <ul className="elements__list"> 
                    {cards.map((card) => <Card key={card._id} onCardClick={onCardClick} card={card}/>)}                   
                </ul>                           
            </section>

        </main>
    );
}


export default Main;