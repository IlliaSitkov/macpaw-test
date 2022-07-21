import React from 'react';
import './UploadButton.css';

export const UploadButton = ({ loading, onClick }) => {
	return (
		<button
			onClick={() => {
				if (!loading) {
					console.log('click');
					onClick();
				}
			}}
			className='upload-btn flex-gap-10 border-r-sm'
		>
			{loading && <div className='spinner' />}
			{loading ? 'Uploading' : 'Upload photo'}
		</button>
	);
};
