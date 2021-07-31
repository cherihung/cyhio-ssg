import {useState, useEffect} from "react";

const ThemeMap = {
  monokai: {
    name: "monokai",
    displayName: "Monokai",
  },
  dark: {
    name: "dark",
    displayName: "Darkness",
  },
  solarizedLight: {
    name: "solarizedLight",
    displayName: "Solarized Light",
  },
  bright: {
    name: "bright",
    displayName: "Bright",
  },
};

const ThemeChoiceKeys = Object.keys(ThemeMap);
const DEFAULT_THEME = ThemeMap.monokai;
// const DarkThemes = (({monokai, dark}) => ({monokai, dark}))(ThemeMap);
// const LightThemes = (({solarizedLight, bright}) => ({solarizedLight, bright}))(ThemeMap);

export default function ThemeToggle() {
  const [theme, setTheme] = useState(DEFAULT_THEME.name);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(theme);
  }, [theme]);

  return ThemeChoiceKeys.map((key) => (
    <span key={key}>
      {theme === ThemeMap[key].name && <span>{ThemeMap[key].displayName}</span>}
      <input
        type='radio'
        name='theme-choice'
        value={key}
        title={`Use ${key} theme`}
        aria-label={`Use ${key} theme`}
        onChange={() => setTheme(key)}
      />
    </span>
  ));
}
