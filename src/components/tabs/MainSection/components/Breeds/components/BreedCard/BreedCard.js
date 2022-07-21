import React from 'react';
import './BreedCard.css';
import { useNavigate } from 'react-router-dom';

export const BreedCard = ({ breed }) => {
	const navigate = useNavigate();

	const goToPage = () => {
		navigate(`/tabs/breeds/${breed.id}`, { replace: false });
	};

	return (
		<div onClick={goToPage} className='breed-card border-r-lg'>
			<img className='img-fit' src={breed.image?.url} alt={breed.name} />
			<div className='breed-card-title-container'>
				<div className='breed-card-title-wrapper center-div'>
					<span className='breed-card-title border-r-sm'>{breed.name}</span>
				</div>
			</div>
		</div>
	);
};
