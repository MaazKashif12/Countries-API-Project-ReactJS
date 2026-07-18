import { useState } from "react";
import { themeContext } from "./theme";

function ThemeProviderComponent({ children }) {
  const [isDark, setIsDark] = useState(
    () => JSON.parse(localStorage.getItem("isDarkMode")) || false,
  );

  return (
    <themeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeProviderComponent;
