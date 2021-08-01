export type themeKeys = "monokai" | "dark" | "solarized" | "bright";
type themeObject = {
  [key in themeKeys]: {
    name: themeKeys;
    displayName: string;
  };
};

export const ThemeMap: themeObject = {
  monokai: {
    name: "monokai",
    displayName: "Monokai",
  },
  dark: {
    name: "dark",
    displayName: "Dracula",
  },
  solarized: {
    name: "solarized",
    displayName: "Solarized",
  },
  bright: {
    name: "bright",
    displayName: "Paper",
  },
};
export const ThemeChoiceKeys = Object.keys(ThemeMap) as themeKeys[];
export const DEFAULT_THEME = ThemeMap.monokai;
export const LOCAL_STORAGE_KEY = "cyh_theme";
