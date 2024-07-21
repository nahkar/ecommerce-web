import { useSignal } from '@preact/signals-react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ITEMS_PER_PAGE, START_PAGE, STEP_PAGE } from '../config';

type Props = {
	totalItems: number;
};
export const usePagination = ({ totalItems }: Props) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const page = searchParams.get('page') ? Number(searchParams.get('page')) : START_PAGE;
	const currentPage = useSignal(page);

	useEffect(() => {
		if (!searchParams.get('page')) {
			setSearchParams({ page: START_PAGE.toString() });
		} else {
			currentPage.value = page;
		}
	}, [searchParams, setSearchParams, page, currentPage]);

	const handlePageChange = (newPage: number) => {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.set('page', newPage.toString());
		setSearchParams(newSearchParams);
		currentPage.value = newPage;
	};

	const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

	const handlePreviousPage = () => {
		if (currentPage.value > START_PAGE) {
			handlePageChange(currentPage.value - STEP_PAGE);
		}
	};

	const handleNextPage = () => {
		if (currentPage.value < totalPages) {
			handlePageChange(currentPage.value + STEP_PAGE);
		}
	};

	return { currentPage, handlePreviousPage, handleNextPage, totalPages };
};
