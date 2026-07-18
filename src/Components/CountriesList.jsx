import { useContext } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
import { CountriesDataContext } from "../contexts/countriesData";

function CountriesList({ searchText, filterRegion }) {
  const { countriesData, loading, error } = useContext(CountriesDataContext);

  if (loading) {
    return <CountriesListShimmer />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const countryArray = countriesData
    .filter(
      (country) =>
        (searchText === "" ||
          country.name.toLowerCase().includes(searchText)) &&
        (filterRegion === "" ||
          country.region.toLowerCase() == filterRegion.toLowerCase()),
    )
    .map((country) => {
      return (
        <CountryCard
          key={country.name}
          countryImage={country.flags.svg}
          countryName={country.name}
          countryPopulation={country.population}
          countryRegion={country.region}
          countryCapital={country.capital}
          data={countriesData}
        />
      );
    });

  return (
    <>
      <div className="Countries-Container">{countryArray}</div>
    </>
  );
}

export default CountriesList;
