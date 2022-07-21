import { API_KEY } from '../shared/constants';

const imagesUrl = 'https://api.thecatapi.com/v1/images';

export const getImageById = (id) => {
	return fetch(`${imagesUrl}/${id}`, {
		method: 'GET',
		headers: {
			'x-api-key': API_KEY,
		},
	});
};

export const getImages = (limit, page, type, order, breedId) => {
	return fetch(
		`${imagesUrl}/search?limit=${limit}&page=${page}&mime_types=${type}&order=${
			order + (breedId ? `&breed_id=${breedId}` : '')
		}`,
		{
			method: 'GET',
			headers: {
				'x-api-key': API_KEY,
			},
		}
	);
};

export const uploadImage = (imageFileFormData) => {
	return fetch('https://api.thecatapi.com/v1/images/upload', {
		method: 'POST',
		headers: {
			'x-api-key': API_KEY,
		},
		body: imageFileFormData,
	});
};
