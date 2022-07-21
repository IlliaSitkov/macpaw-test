import React from 'react';
import './GalleryCard.css';
import { SmallButton } from '../../../../../../../common/SmallButton/SmallButton';
import { HeartFilled } from '../../../../../../../common/icons/HeartFilled';
import { HeartOutline } from '../../../../../../../common/icons/HeartOutline';
import { useFavourite } from '../../../../../../../shared/hooks/useFavourite';

export const GalleryCard = ({ imageId, imageUrl }) => {
	const [favourite, favClicked] = useFavourite(imageId);

	return (
		<div className='breed-card border-r-lg'>
			<img className='img-fit' src={imageUrl} alt={imageId} />
			<div className='breed-card-title-container'>
				<div className='gallery-card-btn-wrapper'>
					<SmallButton onClick={favClicked} white={true}>
						{favourite ? <HeartFilled size={20} /> : <HeartOutline size={20} />}
					</SmallButton>
				</div>
			</div>
		</div>
	);
};
