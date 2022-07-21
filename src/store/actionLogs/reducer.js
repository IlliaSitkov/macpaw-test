import * as types from './actionTypes';

const initialActionLogs = [];

export const actionLogsReducer = (actionLogs = initialActionLogs, action) => {
	switch (action.type) {
		case types.ADD_ACTION_LOGS:
			return action.payload.actionLogs;
		default:
			return actionLogs;
	}
};
