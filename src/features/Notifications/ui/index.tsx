import bellIcon from './img/bell-icon.svg';
import { Notifications__Wrapper } from './styled';

export const Notifications = () => {
	return (
		<Notifications__Wrapper>
			<img src={bellIcon} alt="bell-icon" />
		</Notifications__Wrapper>
	);
};
