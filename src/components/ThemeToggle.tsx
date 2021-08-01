import {useState, useEffect} from "react";
import {DEFAULT_THEME, ThemeChoiceKeys, ThemeMap} from "../utils/constants";
import {getUserTheme, saveUserThemeKey} from "../utils/themeHelper";

export default function ThemeToggle() {
  const [theme, setTheme] = useState();

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
      <span className='choice-inputs'>
        {ThemeChoiceKeys.map((key) => (
          <span key={key}>
            <input
              type='radio'
              name='theme-choice'
              id={`theme-choice-${key}`}
              value={key}
              title={`Use ${key} theme`}
              defaultChecked={key === theme}
              onChange={() => setTheme(key)}
            />
            <label htmlFor={`theme-choice-${key}`}>{ThemeMap[key].displayName}</label>
          </span>
        ))}
      </span>
    </>
  );
}
