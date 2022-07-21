import React from 'react';
import { WorkPane } from '../../../common/WorkPane/WorkPane';

import './MainImage.css';

export const MainImage = () => {
	return (
		<WorkPane>
			<div className='main-image'>
				<img src='assets/images/main_image.png' alt='' />
			</div>
		</WorkPane>
	);
};
