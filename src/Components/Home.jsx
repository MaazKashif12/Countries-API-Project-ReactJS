import SearchBar from "./SearchBar";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useTheme } from "../Hooks/useTheme";
// import { useOutletContext } from "react-router";

function Home() {
  const searchText = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  // const [isDark] = useOutletContext();

  const [isDark] = useTheme();
  return (
    <main className={isDark ? "dark-mode" : ""}>
      <SearchBar
        setSearchText={searchText[1]}
        setFilterRegion={setFilterRegion}
      />

      <CountriesList searchText={searchText[0]} filterRegion={filterRegion} />
    </main>
  );
}

export default Home;
