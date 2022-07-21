import React, { useEffect, useState } from 'react';
import { WorkPane } from '../../../../../common/WorkPane/WorkPane';
import { BackButton } from '../../../../../common/BackButton/BackButton';
import { TabLabel } from '../../../../../common/TabLabel/TabLabel';
import './Gallery.css';
import { fetchAllBreedNames } from '../../../../../store/breedNames/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from '../../../../../store/selectors';
import * as imageService from '../../../../../services/imageService';
import { setLoading } from '../../../../../store/loading/actionCreators';
import { ImageGallery } from '../../../../../common/ImageGallery/ImageGallery';
import { GalleryCard } from './components/GalleryCard/GalleryCard';
import { PaginationControls } from '../../../../../common/PaginationControls/PaginationControls';
import { LoadingSpinner } from '../../../../../common/LoadingSpinner/LoadingSpinner';
import { fetchAllFavourites } from '../../../../../store/favourites/thunk';
import { Message } from '../../../../../common/Message/Message';
import { GalleryFilter } from './components/GalleryFilter/GalleryFilter';
import { StateButton } from '../../../../../common/StateButton/StateButton';
import { Upload } from '../../../../../common/icons/Upload';
import { UploadModal } from './components/UploadModal/UploadModal';

export const Gallery = () => {
	const [limit, setLimit] = useState(5);
	const [breedId, setBreedId] = useState('');
	const [type, setType] = useState('jpg,png');
	const [order, setOrder] = useState('Rand');

	const [images, setImages] = useState([]);
	const [paginationCount, setPaginationCount] = useState(0);

	const [filter, setFilter] = useState({
		limit,
		page: 0,
		breedId,
		type,
		order,
	});

	const [showModal, setShowModal] = useState(false);

	const dispatch = useDispatch();
	const loading = useSelector(getLoading);

	useEffect(() => {
		loadBreedNames();
		dispatch(fetchAllFavourites);
	}, []);

	useEffect(() => {
		loadImages();
	}, [filter]);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const loadImages = async () => {
		dispatch(setLoading(true));
		try {
			const res = await imageService.getImages(
				filter.limit,
				filter.page,
				filter.type,
				filter.order,
				filter.breedId
			);
			if (res.status < 300) {
				setImages(await res.json());
				setPaginationCount(+res.headers.get('pagination-count'));
			} else {
				alert(res.statusText);
			}
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(setLoading(false));
		}
	};

	const loadBreedNames = () => {
		dispatch(fetchAllBreedNames);
	};

	const reloadImages = () => {
		setFilter({
			page: 0,
			limit,
			breedId,
			type,
			order,
		});
	};

	const setPage = (newPage) => {
		console.log('new page: ' + newPage);
		setFilter({
			...filter,
			page: newPage,
		});
	};

	return (
		<WorkPane white={true}>
			<UploadModal show={showModal} toggle={toggleModal} />
			<div className='gallery-tab-header'>
				<div className='gallery-tab-group'>
					<BackButton />
					<TabLabel label='gallery' active={true} />
				</div>
				<StateButton
					label='upload'
					disabled={false}
					iconLeft={true}
					onClick={toggleModal}
				>
					<Upload />
				</StateButton>
			</div>
			<GalleryFilter
				limit={limit}
				limitSetter={setLimit}
				breedId={breedId}
				breedIdSetter={setBreedId}
				order={order}
				orderSetter={setOrder}
				type={type}
				typeSetter={setType}
				reloadImagesFn={reloadImages}
			/>
			<LoadingSpinner loadingCondition={loading} />
			<Message
				showCondition={!loading && images.length <= 0}
				message='No item found'
			/>
			{!loading && images.length > 0 && (
				<>
					<ImageGallery
						data={images}
						dataToComponentFn={(d) => (
							<GalleryCard imageId={d.id} imageUrl={d.url} />
						)}
					/>
					<PaginationControls
						paginationCount={paginationCount}
						page={filter.page}
						pageSetter={setPage}
						limit={limit}
					/>
				</>
			)}
		</WorkPane>
	);
};
