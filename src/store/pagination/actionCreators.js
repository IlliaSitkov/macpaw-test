import * as types from './actionTypes';

export const setPaginationCount = (paginationCount) => {
	return {
		type: types.SET_PAGINATION_COUNT,
		payload: { paginationCount },
	};
};
