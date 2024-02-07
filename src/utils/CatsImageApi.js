const cardsApiOptions = {
	url: 'https://api.thecatapi.com/v1/images/search?limit=10',
	headers: {
		'Content-Type': 'application/json'
	}
}
class CardsApi {
	constructor(config) {
		this._url = config.url;
		this._headers = config._headers;
	}

	_handleResponse(res) {
		if (res.ok) {
			return res.json();
		} else {
			return Promise.reject(`Возникла ошибка: ${res.status}`)
		}
	}

	getAllCards() {
		return fetch(`${this._url}`, {
			method: 'GET',
			headers: this._headers
		})
			.then(this._handleResponse);
	}
}

export const catsCardApi = new CardsApi(cardsApiOptions);