import * as types from './actionTypes';

const initialBreedNames = [];

export const breedNamesReducer = (breedNames = initialBreedNames, action) => {
	switch (action.type) {
		case types.ADD_BREED_NAMES:
			return action.payload.breedNames;
		default:
			return breedNames;
	}
};
