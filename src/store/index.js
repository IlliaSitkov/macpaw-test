import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actionLogsReducer } from './actionLogs/reducer';
import thunk from 'redux-thunk';
import { favouritesReducer } from './favourites/reducer';
import { loadingReducer } from './loading/reducer';
import { paginationReducer } from './pagination/reducer';

const rootReducer = combineReducers({
	actionLogs: actionLogsReducer,
	favourites: favouritesReducer,
	loading: loadingReducer,
	pagination: paginationReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
