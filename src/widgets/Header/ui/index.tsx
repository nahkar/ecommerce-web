import { Language } from '@/features/Language';
import { Notifications } from '@/features/Notifications';
import { Theme } from '@/features/Theme';

import { LayoutInnerContainer } from '@/app/styles/global';

import logo from './img/logo.svg';
import {
	Header__Container,
	Header__Item,
	Header__LeftSide,
	Header__List,
	Header__LogoLabel,
	Header__RightSide,
	Header__Wrapper,
} from './styled';

export const Header = () => {
	return (
		<Header__Wrapper>
			<LayoutInnerContainer>
				<Header__Container>
					<Header__LeftSide>
						<img src={logo} alt="logo" />
						<Header__LogoLabel>NEATLAB</Header__LogoLabel>
					</Header__LeftSide>
					<Header__RightSide>
						<Header__List>
							<Header__Item>
								<Language />
							</Header__Item>
							<Header__Item>
								<Theme />
							</Header__Item>
							<Header__Item>
								<Notifications />
							</Header__Item>
						</Header__List>
					</Header__RightSide>
				</Header__Container>
			</LayoutInnerContainer>
		</Header__Wrapper>
	);
};
