import { createContext } from "react";

export const CountriesDataContext = createContext({
  countriesData: [],
  loading: true,
  error: null,
});
