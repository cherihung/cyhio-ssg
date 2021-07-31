import {useState} from 'react';

const ThemeMap = {
  monokai: {
    name: 'monokai',
    displayName: 'Monokai'
  },
  dark: {
    name: 'dark',
    displayName: 'Darkness'
  },
  solarizedLight: {
    name: 'solarizedLight',
    displayName: 'Solarized Light'
  },
  bright: {
    name: 'bright',
    displayName: 'Bright'
  },
}

export const ThemeChoiceKeys = Object.keys(ThemeMap);
export const DarkThemes = (({ monokai, dark }) => ({monokai, dark}))(ThemeMap);
export const LightThemes = (({ solarizedLight, bright }) => ({ solarizedLight, bright }))(ThemeMap);
export const DEFAULT_THEME = ThemeMap.monokai;

export default function ThemeToggle() {

  const [theme, setTheme] = useState(DEFAULT_THEME.name)
  return(
    ThemeChoiceKeys.map((key) => 
      <>
        {theme === ThemeMap[key].name && <span>{ThemeMap[key].displayName}</span>}
        <input type="radio" name="theme-choice" value={key} title={`Use ${key} theme`} aria-label={`Use ${key} theme`} onChange={() => setTheme(key)} />
      </>
    )
  )
}

// const themeRadioChoices = ThemeChoiceKeys.map((themeKey) =>
//     <React.Fragment key={themeKey}>
//       {theme.name === ThemeMap[themeKey].name && <StyledLabel>{ThemeMap[themeKey].displayName}</StyledLabel>}
//       <Radio
//         checked={theme.name === ThemeMap[themeKey].name}
//         onChange={handleChange}
//         value={ThemeMap[themeKey].name}
//         disableRipple={true}
//         name="app-theme-selector"
//       />
//     </React.Fragment>
//   )