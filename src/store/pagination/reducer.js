import * as types from './actionTypes';

const initialPagination = {
	paginationCount: 0,
};

export const paginationReducer = (pagination = initialPagination, action) => {
	switch (action.type) {
		case types.SET_PAGINATION_COUNT:
			return {
				...pagination,
				paginationCount: action.payload.paginationCount,
			};
		default:
			return pagination;
	}
};
