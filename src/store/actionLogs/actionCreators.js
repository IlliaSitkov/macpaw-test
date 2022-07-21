import * as types from './actionTypes';

export const addActionLogs = (actionLogs) => {
	return {
		type: types.ADD_ACTION_LOGS,
		payload: { actionLogs },
	};
};
