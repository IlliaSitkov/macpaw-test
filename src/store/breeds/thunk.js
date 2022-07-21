import * as breedsService from '../../services/breedsService';
import { addBreeds } from './actionCreators';
import { setPaginationCount } from '../pagination/actionCreators';
import { getImageById } from '../../services/imageService';
import { setLoading } from '../loading/actionCreators';

const getImageForBreed = async (breed) => {
	try {
		const imgRes = await getImageById(breed.reference_image_id);
		if (imgRes.status < 300) {
			const img = await imgRes.json();
			breed.image = { url: img.url, id: img.id };
		} else {
		}
	} catch (e) {
		console.log(e);
	}
};

export const fetchBreeds = (limit, page, order) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const res = await breedsService.getBreeds(limit, page, order);
		if (res.status < 300) {
			const obj = await res.json();
			dispatch(setPaginationCount(res.headers.get('pagination-count')));
			dispatch(addBreeds(obj));
		} else {
			alert(res.statusText);
		}
	} catch (e) {
		console.log(e);
	} finally {
		dispatch(setLoading(false));
	}
};

export const fetchBreedsByName = (name) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const res = await breedsService.getBreedsByName(name);
		if (res.status < 300) {
			const obj = await res.json();
			for (const breed of obj) {
				await getImageForBreed(breed);
			}
			dispatch(setPaginationCount(1));
			dispatch(addBreeds(obj));
		} else {
			alert(res.statusText);
		}
	} catch (e) {
		console.log(e);
	} finally {
		dispatch(setLoading(false));
	}
};
