import * as types from './actionTypes';

const initialBreeds = [];

export const breedsReducer = (breeds = initialBreeds, action) => {
	switch (action.type) {
		case types.ADD_BREEDS:
			return action.payload.breeds;
		default:
			return breeds;
	}
};
