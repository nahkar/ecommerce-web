import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  category_id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  store: Store;
  store_id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createProduct: Product;
  createStore: Store;
  createUser: User;
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String']['input'];
  store_id: Scalars['ID']['input'];
};


export type MutationCreateProductArgs = {
  category_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateStoreArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type PaginatedStores = {
  __typename?: 'PaginatedStores';
  items: Array<Store>;
  totalItems: Scalars['Int']['output'];
};

export type PaginationInput = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export type Product = {
  __typename?: 'Product';
  category: Category;
  category_id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  product_id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  product: Product;
  products: Array<Product>;
  stores: PaginatedStores;
  user: User;
  users: Array<User>;
};


export type QueryProductArgs = {
  product_id: Scalars['String']['input'];
};


export type QueryStoresArgs = {
  pagination: PaginationInput;
};


export type QueryUserArgs = {
  user_id: Scalars['String']['input'];
};

export type Store = {
  __typename?: 'Store';
  address?: Maybe<Scalars['String']['output']>;
  categories: Array<Category>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  store_id: Scalars['ID']['output'];
  user: User;
  user_id: Scalars['ID']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  stores: Array<Store>;
  user_id: Scalars['ID']['output'];
};

export type StoresQueryVariables = Exact<{
  pagination: PaginationInput;
}>;


export type StoresQuery = { __typename?: 'Query', stores: { __typename?: 'PaginatedStores', totalItems: number, items: Array<{ __typename?: 'Store', name: string, store_id: string }> } };


export const StoresDocument = gql`
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

/**
 * __useStoresQuery__
 *
 * To run a query within a React component, call `useStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoresQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useStoresQuery(baseOptions: Apollo.QueryHookOptions<StoresQuery, StoresQueryVariables> & ({ variables: StoresQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StoresQuery, StoresQueryVariables>(StoresDocument, options);
      }
export function useStoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StoresQuery, StoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StoresQuery, StoresQueryVariables>(StoresDocument, options);
        }
export function useStoresSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StoresQuery, StoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StoresQuery, StoresQueryVariables>(StoresDocument, options);
        }
export type StoresQueryHookResult = ReturnType<typeof useStoresQuery>;
export type StoresLazyQueryHookResult = ReturnType<typeof useStoresLazyQuery>;
export type StoresSuspenseQueryHookResult = ReturnType<typeof useStoresSuspenseQuery>;
export type StoresQueryResult = Apollo.QueryResult<StoresQuery, StoresQueryVariables>;