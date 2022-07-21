import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actionLogsReducer } from './actionLogs/reducer';
import thunk from 'redux-thunk';
import { favouritesReducer } from './favourites/reducer';
import { loadingReducer } from './loading/reducer';
import { paginationReducer } from './pagination/reducer';
import { breedsReducer } from './breeds/reducer';
import { breedNamesReducer } from './breedNames/reducer';

const rootReducer = combineReducers({
	actionLogs: actionLogsReducer,
	favourites: favouritesReducer,
	loading: loadingReducer,
	pagination: paginationReducer,
	breeds: breedsReducer,
	breedNames: breedNamesReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
