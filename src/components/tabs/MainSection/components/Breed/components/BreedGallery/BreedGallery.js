import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from '../../../../../../../store/selectors';
import { Image } from '../../../../../../../common/Image/Image';
import * as imageService from '../../../../../../../services/imageService';
import { GalleryControls } from './components/GalleryControls/GalleryControls';
import './BreedGallery.css';
import { LoadingSpinner } from '../../../../../../../common/LoadingSpinner/LoadingSpinner';
import { setLoading } from '../../../../../../../store/loading/actionCreators';

export const BreedGallery = ({ breedId, imageQuantity }) => {
	const [images, setImages] = useState([]);
	const [elemQuantity, setElemQuantity] = useState(imageQuantity);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const loading = useSelector(getLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		loadImages();
	}, []);

	const loadImages = async () => {
		dispatch(setLoading(true));
		try {
			const res = await imageService.getImages(
				imageQuantity,
				0,
				'png,jpg',
				'Asc',
				breedId
			);
			if (res.status < 300) {
				const obj = await res.json();
				setElemQuantity(obj.length);
				setImages(obj);
			} else {
				alert(res.statusText);
			}
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(setLoading(false));
		}
	};

	return (
		<div style={{ position: 'relative' }}>
			<LoadingSpinner loadingCondition={loading} />
			{!loading && (
				<>
					<Image imgPath={images[currentImageIndex]?.url} />
					<div className='center-div overlap-half-up'>
						<GalleryControls
							elemQuantity={elemQuantity}
							currentIndex={currentImageIndex}
							setIndex={setCurrentImageIndex}
						/>
					</div>
				</>
			)}
		</div>
	);
};
