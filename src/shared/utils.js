export const onChangeHandler = (setter) => (event) => {
	setter(event.target.value);
};

export const imageIsInFavourites = (imageId, favourites) => {
	return favourites.some((fav) => fav.image_id === imageId);
};

export const getFavouriteIdByImageId = (imageId, favourites) => {
	return favourites.find((fav) => fav.image_id === imageId)?.id;
};
