import * as breedsService from '../../services/breedsService';
import { addBreedNames } from './actionCreators';
import { setLoading } from '../loading/actionCreators';

export const fetchAllBreedNames = async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const res = await breedsService.getAllBreedNames();
		if (res.status < 300) {
			const obj = await res.json();
			dispatch(addBreedNames(obj));
		} else {
			alert(res.statusText);
		}
	} catch (e) {
		console.log(e);
	} finally {
		dispatch(setLoading(false));
	}
};
