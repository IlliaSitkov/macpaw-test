import * as types from './actionTypes';

export const setLoading = (loading) => {
	return {
		type: types.SET_LOADING,
		payload: { loading },
	};
};
