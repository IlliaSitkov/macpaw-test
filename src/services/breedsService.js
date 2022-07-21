import { API_KEY } from '../shared/constants';

const breedsUrl = 'https://api.thecatapi.com/v1/breeds';

export const getBreeds = (limit, page, order) => {
	return fetch(`${breedsUrl}?limit=${limit}&page=${page}&order=${order}`, {
		method: 'GET',
		headers: {
			'x-api-key': API_KEY,
		},
	});
};

export const getAllBreedNames = () => {
	return fetch(breedsUrl, {
		method: 'GET',
		headers: {
			'x-api-key': API_KEY,
		},
	});
};

export const getBreedsByName = (name) => {
	return fetch(`${breedsUrl}/search?q=${name}`, {
		method: 'GET',
		headers: {
			'x-api-key': API_KEY,
		},
	});
};
