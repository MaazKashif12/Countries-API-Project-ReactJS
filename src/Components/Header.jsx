import { useContext, useEffect } from "react";
import { themeContext } from "../contexts/theme";

function Header() {
  // const [isDark, setIsDark] = theme;

  const [isDark, setIsDark] = useContext(themeContext);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <header className={isDark ? "dark-mode" : ""}>
      <h2 id="title">Where In The World</h2>
      <p>
        <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>&nbsp;&nbsp;
        <span
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
          id="theme-Btn"
        >
          {isDark ? "Light" : "Dark"} Mode
        </span>
      </p>
    </header>
  );
}

export default Header;
