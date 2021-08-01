import {LOCAL_STORAGE_KEY, themeKeys, ThemeMap} from "./constants";

export const getUserTheme = () => {
  const savedKey = localStorage.getItem(LOCAL_STORAGE_KEY) as themeKeys;
  const userTheme = ThemeMap[savedKey];

  if (!userTheme) {
    clearUserThemeKey();
  }

  return savedKey;
};

export const saveUserThemeKey = (themeKey) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, themeKey);
};

export const clearUserThemeKey = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
