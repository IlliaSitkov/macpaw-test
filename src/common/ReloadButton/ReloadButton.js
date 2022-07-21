import React from 'react';
import { SmallButton } from '../SmallButton/SmallButton';
import { Reload } from '../icons/Reload';

export const ReloadButton = ({ onClick }) => {
	return (
		<SmallButton onClick={onClick} white={true}>
			<Reload />
		</SmallButton>
	);
};
