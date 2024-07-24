import { useCustomTheme } from '@/app/contexts/CustomThemeContext/hooks/useCustomTheme';

import darkIcon from './img/dark-icon.svg';
import lightIcon from './img/light-icon.svg';
import { Theme__Wrapper } from './styled';

export const Theme = () => {
	const { customTheme, toggleCustomTheme } = useCustomTheme();

	return (
		<Theme__Wrapper onClick={toggleCustomTheme}>
			{customTheme === 'light' ? (
				<img src={lightIcon} alt="moon-icon" />
			) : (
				<img src={darkIcon} alt="sun-icon" />
			)}
		</Theme__Wrapper>
	);
};
