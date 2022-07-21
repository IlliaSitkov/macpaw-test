import React, { useEffect, useState } from 'react';
import './UploadModal.css';
import { SmallButton } from '../../../../../../../common/SmallButton/SmallButton';
import { Close } from '../../../../../../../common/icons/Close';
import { UploadButton } from '../../../../../../../common/UploadButton/UploadButton';
import { UploadArea } from './components/UploadArea/UploadArea';
import * as imageService from '../../../../../../../services/imageService';
import { IconMessage } from '../../../../../../../common/IconMessage/IconMessage';
import { Check } from '../../../../../../../common/icons/Check';
import { Cross } from '../../../../../../../common/icons/Cross';

export const UploadModal = ({ show, toggle }) => {
	const [file, setFile] = useState('');
	const [image, setImage] = useState(null);
	const [imageName, setImageName] = useState('');
	const [success, setSuccess] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log('image: ', image);
		console.log('file: ', file);
		console.log('name: ', imageName);
	}, [image, file, imageName]);

	if (!show) {
		return null;
	}

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			setFile(event.target.files[0]);
			setImageName(event.target.files[0]?.name);
			setImage(URL.createObjectURL(event.target.files[0]));
			setSuccess(null);
		}
	};

	const clearForm = () => {
		setFile(null);
		setImageName('');
		setImage(null);
	};

	const clearModal = () => {
		clearForm();
		setSuccess(null);
	};

	const uploadImage = async () => {
		setLoading(true);
		try {
			const formData = new FormData();
			formData.append('file', file);
			const res = await imageService.uploadImage(formData);
			if (res.status < 300) {
				setSuccess(true);
				clearForm();
			} else {
				setSuccess(false);
			}
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='upload-modal-wrapper'>
			<div className='upload-modal border-r-lg'>
				<div className='close-btn-position'>
					<SmallButton
						white={true}
						onClick={() => {
							toggle();
							clearModal();
						}}
					>
						<Close />
					</SmallButton>
				</div>
				<h1 className='upload-modal-header'>Upload a .jpg or .png Cat Image</h1>
				<p>
					Any uploads must comply with the{' '}
					<a href='https://thecatapi.com/privacy'>upload guidelines</a> or face
					deletion.
				</p>
				<UploadArea
					showError={success !== null && !success}
					image={image}
					imageName={imageName}
					onImageChangeHandler={onImageChange}
				/>
				<div className='modal-text'>
					{imageName ? `Image File Name: ${imageName}` : 'No file selected'}
				</div>
				{image && (
					<div className='center-btn'>
						<UploadButton loading={loading} onClick={uploadImage} />
					</div>
				)}
				<IconMessage
					message='Thanks for the Upload - Cat found!'
					showCondition={success}
					icon={<Check />}
				/>
				<IconMessage
					message='No Cat found - try a different one'
					showCondition={success !== null && !success}
					icon={<Cross />}
				/>
			</div>
		</div>
	);
};
