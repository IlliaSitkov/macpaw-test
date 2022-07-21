import * as types from './actionTypes';

export const addFavourites = (favourites) => {
	return {
		type: types.ADD_FAVOURITES,
		payload: { favourites },
	};
};
