import React from 'react';

import './ImageGallery.css';

export const ImageGallery = ({ data, dataToComponentFn }) => {
	const range = (a, b) => {
		return a + '/' + b;
	};

	const getPosition = (i) => {
		const t = (i % 10) + 1;
		const q = Math.trunc(i / 10);
		const fullRows = 6;
		const shift = q * fullRows;
		switch (t) {
			case 1:
				return {
					col: 1,
					row: range(1 + shift, 3 + shift),
				};
			case 2:
				return {
					col: 2,
					row: 1 + shift,
				};
			case 3:
				return {
					col: 3,
					row: 1 + shift,
				};
			case 4:
				return {
					col: range(2, 4),
					row: range(2 + shift, 4 + shift),
				};
			case 5:
				return {
					col: 1,
					row: 3 + shift,
				};
			case 6:
				return {
					col: 1,
					row: 4 + shift,
				};
			case 7:
				return {
					col: 2,
					row: 4 + shift,
				};
			case 8:
				return {
					col: 3,
					row: range(4 + shift, 6 + shift),
				};
			case 9:
				return {
					col: range(1, 3),
					row: range(5 + shift, 7 + shift),
				};
			case 10:
				return {
					col: 3,
					row: 6 + shift,
				};
			default:
				return null;
		}
	};

	const components = data.map((d, i) => {
		const position = getPosition(i);
		return (
			<div
				key={d.id}
				style={{ gridColumn: position.col, gridRow: position.row }}
			>
				{dataToComponentFn(d)}
			</div>
		);
	});

	return <div className='image-gallery'>{components}</div>;
};
