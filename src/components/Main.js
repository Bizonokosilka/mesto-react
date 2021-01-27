import React from 'react';
import Card from './Card';
import Api from '../utils/api';

function Main(props) {
    const [userName, setUserName] = React.useState(false);
    const [userDescription, setUserDescription] = React.useState(false);
    const [userAvatar, setUserAvatar] = React.useState(false);
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
                <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} />
                <div className="profile__info">                            
                    <h2 className="profile__name">{userName}</h2>
                    <button className="profile__edit-btn" type="button" onClick={props.onEditProfile} />
                    <p className="profile__about">{userDescription}</p>                            
                </div>
                <button className="profile__add-btn" type="button" onClick={props.onAddPlace} />
            </section>

            <section className="elements">
                <ul className="elements__list"> 
                    {cards.map((card) => (
                    <Card key={card._id} onCardClick={props.onCardClick} card={card}/>
                    )
                )}
                </ul>
            </section>

        </main>
    );
}


export default Main;

