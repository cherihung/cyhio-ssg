import {useState, useEffect} from "react";
import {DEFAULT_THEME, ThemeChoiceKeys, ThemeMap} from "../utils/constants";
import {getUserTheme, saveUserThemeKey} from "../utils/themeHelper";

export default function ThemeToggle() {
  const [theme, setTheme] = useState();
  
  const setRootClassName = (name) => {
    const root = document.documentElement;
    root.className = "";
    root.classList.add(name);
  }

  useEffect(() => {
    if(theme) {
      setRootClassName(theme);
      saveUserThemeKey(theme);  
    }
  }, [theme]);

  useEffect(() => {
    const savedTheme = getUserTheme();
    console.log(savedTheme)
    if(savedTheme) {
      setTheme(savedTheme);
    }
    setRootClassName(savedTheme);
  }, []);

  return ThemeChoiceKeys.map((key) => (
    <span key={key}>
      {theme === ThemeMap[key].name && <span>{ThemeMap[key].displayName}</span>}
      <input
        type='radio'
        name='theme-choice'
        value={key}
        title={`Use ${key} theme`}
        checked={key === theme}
        aria-label={`Use ${key} theme`}
        onChange={() => setTheme(key)}
      />
    </span>
  ));
}
