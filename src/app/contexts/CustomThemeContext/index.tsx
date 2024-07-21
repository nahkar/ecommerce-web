import React, { ReactNode, createContext, useState } from 'react';

import { CustomTheme, CustomThemeContextType } from './types';

export const CustomThemeContext = createContext<CustomThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [customTheme, setCustomTheme] = useState<CustomTheme>('light');

	const toggleCustomTheme = () => {
		setCustomTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<CustomThemeContext.Provider value={{ customTheme, toggleCustomTheme }}>
			{children}
		</CustomThemeContext.Provider>
	);
};
