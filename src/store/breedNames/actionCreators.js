import * as types from './actionTypes';
export const addBreedNames = (breedNames) => {
	return {
		type: types.ADD_BREED_NAMES,
		payload: { breedNames },
	};
};
