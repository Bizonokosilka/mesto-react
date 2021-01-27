class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}users/me`, { 
            headers: this.headers,
        })
        .then(this._checkResponse);
    }

    getCards() {
        return fetch(`${this.baseUrl}cards`, { 
            headers: this.headers,
        })
        .then(this._checkResponse);
    }

    setUserInfo(item) {
        return fetch(`${this.baseUrl}users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: item.name,
                about: item.about
            })
        })
        .then(this._checkResponse);
    }

    createCard(newCard) { 
        return fetch(`${this.baseUrl}cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: newCard.name,
                link: newCard.link,
            })
        })
        .then(this._checkResponse);
    }

    deleteCard(id) { 
        return fetch(`${this.baseUrl}cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._checkResponse);
    }

    likeCard(id) { 
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
            method: 'PUT',
            headers: this.headers,
        })
        .then(this._checkResponse);
    }

    dislikeCard(id) { 
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._checkResponse);
    }

    setAvatar(avatar) {
        return fetch(`${this.baseUrl}users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(avatar),
        })
        .then(this._checkResponse);
    }
    }

    const api = new Api({
        baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-18/',
        headers: {
            authorization: 'df186bcc-089f-406c-b05a-966a57eefbcc',
            'Content-Type': 'application/json',
        }
    })
    
    export default api;    