import React from 'react';
import './UploadArea.css';

export const UploadArea = ({
	showError,
	image,
	imageName,
	onImageChangeHandler,
}) => {
	return (
		<div
			className={`upload-area border-r-lg ${
				showError ? 'upload-area-error' : ''
			}`}
		>
			{image ? (
				<div className='selected-img-wrapper border-r-sm'>
					<img src={image} alt={imageName} />
				</div>
			) : (
				<>
					<img
						className='placeholder-img'
						src='/assets/images/img_placeholder.png'
						alt='placeholder'
					/>
					<div className='upload-area-text modal-text'>
						<span>Drag here&nbsp;</span> your file or{' '}
						<span>&nbsp;Click here&nbsp;</span> to upload
					</div>
				</>
			)}
			<input onChange={onImageChangeHandler} type='file' />
		</div>
	);
};
