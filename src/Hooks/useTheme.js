import { useContext } from "react";
import { themeContext } from "../contexts/theme";

// export function useTheme() {
//   const [isDark, setIsDark] = useContext(themeContext);

//   return [isDark, setIsDark];
// }

// export function useTheme() {
//   return useContext(themeContext);
// }

export const useTheme = () => useContext(themeContext);

//  same kaam ..!!!
