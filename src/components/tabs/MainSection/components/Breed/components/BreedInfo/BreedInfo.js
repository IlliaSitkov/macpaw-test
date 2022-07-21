import React from 'react';
import './BreedInfo.css';

export const BreedInfo = ({ breed }) => {
	return (
		<div>
			<div className='breed-name'>
				<h1 className='breed-name'>{breed.name}</h1>
			</div>
			<div className='breed-info border-r-lg'>
				<div className='breed-description'>{breed.description}</div>
				<div className='two-cols' style={{ marginTop: '2em' }}>
					<div>
						<p className='breed-details'>
							<span>Temperament:</span>
							<br />
							{breed.temperament}
						</p>
					</div>
					<div>
						<p className='breed-details'>
							<span>Origin: </span>
							{breed.origin}
						</p>
						<p className='breed-details'>
							<span>Weight: </span>
							{breed.weight.metric} kgs
						</p>
						<p className='breed-details'>
							<span>Life span: </span>
							{breed.life_span} years
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
