import { useEffect, useState } from "react";
import { CountriesDataContext } from "./countriesData";

export function CountriesDataProvider({ children }) {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Countries data could not be loaded");
        }
        return res.json();
      })
      .then((data) => {
        setCountriesData(Array.isArray(data) ? data : data.countries || []);
        setError(null);
      })
      .catch((err) => {
        setCountriesData([]);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <CountriesDataContext.Provider value={{ countriesData, loading, error }}>
      {children}
    </CountriesDataContext.Provider>
  );
}
