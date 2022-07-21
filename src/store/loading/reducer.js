import * as types from './actionTypes';

const initialLoading = false;

export const loadingReducer = (loading = initialLoading, action) => {
	switch (action.type) {
		case types.SET_LOADING:
			return action.payload.loading;
		default:
			return loading;
	}
};
