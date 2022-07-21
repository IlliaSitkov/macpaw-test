import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../../store/selectors';
import { getFavouriteIdByImageId } from '../utils';
import * as votingService from '../../services/votingService';
import { fetchAllFavourites } from '../../store/favourites/thunk';
import { useEffect, useState } from 'react';

export const useFavourite = (imageId) => {
	const [favourite, setFavourite] = useState(false);
	const [favId, setFavId] = useState(null);

	const dispatch = useDispatch();
	const favourites = useSelector(getFavourites);

	useEffect(() => {
		const id = getFavouriteIdByImageId(imageId, favourites);
		setFavourite(!!id);
		setFavId(id);
	}, [imageId]);

	const favClicked = async () => {
		if (favourite) {
			removeFromFavourites();
		} else {
			addToFavourites();
		}
	};

	const removeFromFavourites = async () => {
		try {
			const res = await votingService.removeFromFavourites(favId);
			if (res.status < 300) {
				setFavourite(false);
				setFavId(null);
				dispatch(fetchAllFavourites);
			} else {
				alert(res.statusText);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const addToFavourites = async () => {
		try {
			const res = await votingService.addToFavourites(imageId);
			if (res.status < 300) {
				const obj = await res.json();
				setFavourite(true);
				setFavId(obj.id);
				dispatch(fetchAllFavourites);
			} else {
				alert(res.statusText);
			}
		} catch (e) {
			console.log(e);
		}
	};

	return [favourite, favClicked];
};
