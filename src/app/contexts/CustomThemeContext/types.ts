export type CustomTheme = 'light' | 'dark';
export type CustomThemeContextType = {
	customTheme: CustomTheme;
	toggleCustomTheme: () => void;
};
