export const ThemeMap = {
  monokai: {
    name: "monokai",
    displayName: "Monokai",
  },
  dark: {
    name: "dark",
    displayName: "Darkness",
  },
  solarized: {
    name: "solarized",
    displayName: "Solarized",
  },
  bright: {
    name: "bright",
    displayName: "Bright",
  },
};

export const ThemeChoiceKeys = Object.keys(ThemeMap);
export const DEFAULT_THEME = ThemeMap.monokai;
// const DarkThemes = (({monokai, dark}) => ({monokai, dark}))(ThemeMap);
// const LightThemes = (({solarizedLight, bright}) => ({solarizedLight, bright}))(ThemeMap);
