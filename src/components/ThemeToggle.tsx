import {useState, useEffect} from "react";
import {DEFAULT_THEME, ThemeChoiceKeys, themeKeys} from "../utils/constants";
import {getThemeName, getUserTheme, saveUserThemeKey} from "../utils/themeHelper";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<themeKeys | undefined>();

  const setRootClassName = (name) => {
    const root = document.documentElement;
    root.className = "";
    root.classList.add(name);
  };

  useEffect(() => {
    if (theme) {
      setRootClassName(theme);
      saveUserThemeKey(theme);
    }
  }, [theme]);

  useEffect(() => {
    const savedTheme = getUserTheme();
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(DEFAULT_THEME.name);
    }
  }, []);

  return (
    <>
      <span className={"themeName"}>{theme && getThemeName(theme)}</span>
      {ThemeChoiceKeys.map((key) => (
        <span key={key} className='mui-radio'>
          <label>
            <input
              type='radio'
              name='theme-choice'
              value={key}
              title={`Use ${key} theme`}
              checked={key === theme}
              aria-label={`Use ${key} theme`}
              onChange={() => setTheme(key)}
            />
          </label>
        </span>
      ))}
    </>
  );
}
