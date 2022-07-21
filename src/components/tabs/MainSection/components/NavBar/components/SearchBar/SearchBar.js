import React, { useState } from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../../../../../../../common/icons/SearchIcon';
import { SmallButton } from '../../../../../../../common/SmallButton/SmallButton';
import { onChangeHandler } from '../../../../../../../shared/utils';

export const SearchBar = () => {
	const tabName = 'search';

	const [searchString, setSearchString] = useState('');

	const navigate = useNavigate();

	const goToTab = () => {
		navigate(`/tabs/${tabName}?q=${searchString}`);
	};

	return (
		<div className='search-bar border-light-pink-hover'>
			<input
				value={searchString}
				onChange={onChangeHandler(setSearchString)}
				placeholder='Search for breeds by name'
				type='search'
				id='searchString'
			/>
			<SmallButton
				white={false}
				onClick={goToTab}
				className='border-r-sm search-btn'
			>
				<SearchIcon />
			</SmallButton>
		</div>
	);
};
