import { useStoresQuery } from '@/generated/graphql';
import { ITEMS_PER_PAGE, START_PAGE } from '@/shared/components/Pagination';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useStoresWidget = () => {
	const [totalItems, setTotalItems] = useState(0);
	const [searchParams] = useSearchParams();
	const currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : START_PAGE;

	const { loading, data, refetch, error } = useStoresQuery({
		variables: { pagination: { page: currentPage, limit: ITEMS_PER_PAGE } },
		onCompleted: (data) => {
			setTotalItems(data.stores.totalItems);
		},
	});

	useEffect(() => {
		refetch();
	}, [currentPage, refetch]);

	return {
		loading,
		data,
		error,
		totalItems,
	};
};
