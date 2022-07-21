import React from 'react';

import './Image.css';

export const Image = ({ imgPath, alt }) => {
	return (
		<div className='cat-image'>
			<img className='img-fit' src={imgPath ? imgPath : '/'} alt={alt} />
		</div>
	);
};
