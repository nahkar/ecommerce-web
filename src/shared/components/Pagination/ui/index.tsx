import { usePagination } from '../hooks/usePagination';

type Props = {
	totalItems: number;
};

export const Pagination = ({ totalItems }: Props) => {
	const { currentPage, handlePreviousPage, handleNextPage, totalPages } = usePagination({
		totalItems,
	});

	if (totalItems <= 5) return null;

	return (
		<div>
			<button onClick={handlePreviousPage} disabled={currentPage.value === 1}>
				Previous
			</button>
			<span>{`Page ${currentPage} of ${totalPages}`}</span>
			<button onClick={handleNextPage} disabled={currentPage.value === totalPages}>
				Next
			</button>
		</div>
	);
};
