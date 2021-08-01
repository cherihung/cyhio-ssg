import {ThemeMap} from "./constants";

const LOCAL_STORAGE_KEY = "cyh_theme";
type themeKeys = keyof typeof ThemeMap;

export const getUserTheme = () => {
  const savedKey = localStorage.getItem(LOCAL_STORAGE_KEY) as themeKeys;
  const userTheme = getThemeObject(savedKey);

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

export const getThemeObject = (key: themeKeys) => {
  return ThemeMap[key];
};
