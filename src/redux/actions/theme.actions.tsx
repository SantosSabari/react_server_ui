export const SETTHEME = 'SET_THEME';

export const setThemeAction = (isDark:boolean) => {
    console.log('isDark', isDark)
    return {
        type: SETTHEME,
        payload:isDark
    };
};