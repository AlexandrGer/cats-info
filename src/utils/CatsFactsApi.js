const factsApiOptions = {
	url: 'https://meowfacts.herokuapp.com/?count=10&lang=rus',
	headers: {
		'Content-Type': 'application/json'
	}
}
class FactsApi {
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

	getAllFacts() {
		return fetch(`${this._url}`, {
			method: 'GET',
			headers: this._headers
		})
			.then(this._handleResponse);
	}
}

export const catsFactsApi = new FactsApi(factsApiOptions);