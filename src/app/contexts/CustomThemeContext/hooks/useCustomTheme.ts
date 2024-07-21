import { useContext } from 'react';

import { CustomThemeContext } from '..';
import { CustomThemeContextType } from '../types';

export const useCustomTheme = (): CustomThemeContextType => {
	const context = useContext(CustomThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
