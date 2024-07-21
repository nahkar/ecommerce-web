import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { CustomThemeProvider } from '@/app/contexts/CustomThemeContext';
import { RouterProvider } from '@/app/routes';
import { GlobalStyle } from '@/app/styles/global';

import { theme } from '../styles/theme';

type Props = {
	children?: ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
	const client = new ApolloClient({
		uri: import.meta.env.VITE_SERVER_URL,
		cache: new InMemoryCache(),
	});
	return (
		<ApolloProvider client={client}>
			<CustomThemeProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyle theme={theme} />
					<RouterProvider />
					{children}
				</ThemeProvider>
			</CustomThemeProvider>
		</ApolloProvider>
	);
};
