import FilterByRegion from "./FilterByRegion";

function SearchBar({ setSearchText, setFilterRegion }) {
  return (
    <div className="search-filter-container">
      <div className="searchBar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Seacrh for a country"
          id="search-country"
        />
      </div>
      <FilterByRegion setFilterRegion={setFilterRegion} />
    </div>
  );
}

export default SearchBar;
