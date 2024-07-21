import { PAGINATION_INPUT } from '@/shared/entities/pagination';
import { gql } from '@apollo/client';

export const GET_STORES = gql`
	${PAGINATION_INPUT}

	query Stores($pagination: PaginationInput!) {
		stores(pagination: $pagination) {
			items {
				name
				store_id
			}
			totalItems
		}
	}
`;
