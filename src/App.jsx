import Header from "./Components/Header";
import { Outlet } from "react-router";
import { CountriesDataProvider } from "./contexts/CountriesDataContext.jsx";
import ThemeProviderComponent from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <CountriesDataProvider>
      <ThemeProviderComponent>
        <Header />
        <Outlet />
      </ThemeProviderComponent>
    </CountriesDataProvider>
  );
}

export default App;
