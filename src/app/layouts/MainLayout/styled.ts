import { ThemeT } from '@/app/styles/theme';
import { styled } from 'styled-components';

export const MainLayout__Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	justify-content: space-between;
`;
export const MainLayout__ContentWrapper = styled.div<{ theme: ThemeT }>`
	width: 1440px;
	padding: 26px 6px 0 26px;
	margin: 0 auto;
	@media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		padding: 0 20px;
		width: 100%;
		min-width: 391px;
	}
`;
export const MainLayout__Inner = styled.div``;
