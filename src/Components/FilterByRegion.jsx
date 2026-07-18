function FilterByRegion({ setFilterRegion }) {
  return (
    <select
      name=""
      id="filter-by-region"
      onChange={(e) => setFilterRegion(e.target.value.toLowerCase())}
    >
      <option hidden>filter by region</option>
      <option value="africa">africa</option>
      <option value="Americas">Americas</option>
      <option value="asia">asia</option>
      <option value="europe">europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default FilterByRegion;
