import React from 'react';

export const SimpleCard = ({ imgUrl, alt }) => {
	return (
		<div className='breed-card border-r-lg'>
			<img className='img-fit' src={imgUrl} alt={alt} />
		</div>
	);
};
