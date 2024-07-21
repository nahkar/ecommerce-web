import { gql } from '@apollo/client';

export const PAGINATION_INPUT = gql`
	input PaginationInput {
		page: Int!
		limit: Int!
	}
`;
