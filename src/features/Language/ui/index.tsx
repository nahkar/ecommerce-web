import languageIcon from './img/language-icon.svg';
import { Language_Wrapper } from './styled';

export const Language = () => {
	return (
		<Language_Wrapper>
			<img src={languageIcon} alt="language-icon" />
		</Language_Wrapper>
	);
};
