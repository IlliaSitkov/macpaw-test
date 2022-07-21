import * as types from './actionTypes';

const initialFavourites = [];

export const favouritesReducer = (favourites = initialFavourites, action) => {
	switch (action.type) {
		case types.ADD_FAVOURITES:
			return action.payload.favourites;
		default:
			return favourites;
	}
};
