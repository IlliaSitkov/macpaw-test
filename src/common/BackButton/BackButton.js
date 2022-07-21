import React from 'react';
import { SmallButton } from '../SmallButton/SmallButton';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from '../icons/ArrowLeft';

export const BackButton = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<SmallButton onClick={goBack} white={false}>
			<ArrowLeft />
		</SmallButton>
	);
};
