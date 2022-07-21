import * as types from './actionTypes';
export const addBreeds = (breeds) => {
	return {
		type: types.ADD_BREEDS,
		payload: { breeds },
	};
};
