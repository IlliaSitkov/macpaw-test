import * as votingService from '../../services/votingService';
import { addFavourites } from './actionCreators';

export const fetchAllFavourites = async (dispatch) => {
	try {
		const res = await votingService.getAllFavorites();
		if (res.status < 300) {
			const obj = await res.json();
			dispatch(addFavourites(obj));
		} else {
			alert(res.statusText);
		}
	} catch (e) {
		console.log(e);
	}
};
