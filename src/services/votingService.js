import { API_KEY } from '../shared/constants';
import * as imageService from './imageService';

const favUrl = 'https://api.thecatapi.com/v1/favourites';

const searchUrl = 'https://api.thecatapi.com/v1/images/search';

const votesUrl = 'https://api.thecatapi.com/v1/votes';

export const addToFavourites = (imgId) => {
	return fetch(favUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': API_KEY,
		},
		body: JSON.stringify({
			image_id: imgId,
		}),
	});
};

export const removeFromFavourites = (favId) => {
	return fetch(`${favUrl}/${favId}`, {
		method: 'DELETE',
		headers: {
			'x-api-key': API_KEY,
		},
	});
};

export const getRandomImage = () => {
	return fetch(`${searchUrl}?limit=1&size=full`, {
		method: 'GET',
		headers: {
			'x-api-key': API_KEY,
		},
	});
};

export const vote = (voteValue, imgId) => {
	return fetch(votesUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': API_KEY,
		},
		body: JSON.stringify({
			image_id: imgId,
			value: voteValue,
		}),
	});
};

export const getVotes = (limit, page) => {
	return fetch(`${votesUrl}?limit=${limit}&page=${page}&order=Desc`, {
		method: 'GET',
		headers: {
			'x-api-key': API_KEY,
		},
	});
};

export const getFavourites = (limit, page) => {
	return fetch(`${favUrl}?limit=${limit}&page=${page}&order=Desc`, {
		method: 'GET',
		headers: {
			'x-api-key': API_KEY,
		},
	});
};

export const getAllVotes = () => {
	return fetch(votesUrl, {
		method: 'GET',
		headers: {
			'x-api-key': API_KEY,
		},
	});
};

export const getAllFavorites = () => {
	return fetch(favUrl, {
		method: 'GET',
		headers: {
			'x-api-key': API_KEY,
		},
	});
};

export const getImageForVote = async (vote) => {
	try {
		const res = await imageService.getImageById(vote.image_id);
		if (res.status < 300) {
			const obj = await res.json();
			vote.url = obj.url;
		}
	} catch (e) {
		console.log(e);
	}
};

export const getAllVotesOfTypeWithImage = async (typeValue, votesSetter) => {
	try {
		const res = await getAllVotes();
		if (res.status < 300) {
			const obj = await res.json();
			const votes = obj.filter((v) => v.value === typeValue);
			for (let vote of votes) {
				await getImageForVote(vote);
			}
			votesSetter(votes);
		} else {
			alert(res.statusText);
		}
	} catch (e) {
		console.log(e);
	}
};
