import { ITheme, IThemes } from 'src/utils/theme';
import { base } from './base';
import { dark } from './dark';

/**
 * The default theme to load
 */
export const DEFAULT_THEME: string = 'base';

export const themes: IThemes = {
    base: base,
    dark: dark,
};


export const extend = (
    extending: ITheme,
    newTheme: ITheme
): ITheme => {
    return { ...extending, ...newTheme };
};