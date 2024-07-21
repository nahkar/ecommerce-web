import { Loader } from '@/shared/components/Loader';
import { Pagination } from '@/shared/components/Pagination';

import { useStoresWidget } from '../hooks/useStoresWidget';

export const StoresWidget = () => {
	const { loading, data, error, totalItems } = useStoresWidget();

	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			{loading && <Loader />}
			<ul>{data?.stores.items.map((store) => <li key={store.store_id}>{store.name}</li>)}</ul>
			{!loading && <Pagination totalItems={totalItems} />}
		</div>
	);
};
