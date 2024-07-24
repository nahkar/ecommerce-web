import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

import { MainLayout__ContentWrapper, MainLayout__Inner, MainLayout__Wrapper } from './styled';

export const MainLayout = () => {
	return (
		<MainLayout__Wrapper>
			<MainLayout__Inner>
				<Header />
				<MainLayout__ContentWrapper>
					<HelmetProvider>
						<Helmet>
							<meta name="description" content="Description" />
							<link
								href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
								rel="stylesheet"
							/>
						</Helmet>
					</HelmetProvider>
					<Outlet />
				</MainLayout__ContentWrapper>
			</MainLayout__Inner>
			<Footer />
		</MainLayout__Wrapper>
	);
};
