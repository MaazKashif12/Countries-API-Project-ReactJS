import { useContext } from "react";
import "./countryDetail.css";
import { Link, useNavigate, useParams } from "react-router";
import CountryDetailShimmer from "./CountryDetailShimmer";
import { useTheme } from "../Hooks/useTheme";
import { CountriesDataContext } from "../contexts/countriesData";

function CountryDetail() {
  const { country: countryName } = useParams();
  const navigation = useNavigate();

  const [isDark] = useTheme();

  //Context API
  const { countriesData, loading, error } = useContext(CountriesDataContext);

  const foundCountry = countriesData.find(
    (country) =>
      country.name.toLowerCase().trim() == countryName.toLowerCase().trim(),
  );

  if (loading) {
    return <CountryDetailShimmer />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!foundCountry) {
    return <h1>Country Not Found</h1>;
  }
  // 🚩Derived Variables :
  //Currencies
  const Currencies = foundCountry.currencies
    ?.map((currency) => currency.name)
    .join(" ,");

  //Top Level Domian
  const topLevelDomain = foundCountry.topLevelDomain?.join(" ,") || "N/A";

  //Languages Details
  const Languages =
    foundCountry.languages?.map((lang) => lang.name).join(" ,") || "N/A";

  //Border Detail
  const borderDetail = foundCountry.borders?.map((border) => {
    const borderCountry = countriesData?.find(
      (country) => country.alpha3Code == border,
    );
    return borderCountry;
  });

  return (
    <main className={isDark ? "dark-mode" : ""}>
      <div className="Back-Btn">
        <a
          className={` ${isDark ? "dark-mode" : ""}`}
          onClick={() => navigation(-1)}
        >
          <i className="fa-solid fa-arrow-left"></i> &nbsp;Back
        </a>
      </div>

      <section className="country-details-container">
        <div className="country-details-img">
          <img src={foundCountry?.flags.svg} alt="" />
        </div>
        <div className="content-details-section">
          <div className="content-details">
            <div className="content-details-one">
              <h1>{foundCountry?.name}</h1>
              <p>
                <b>Native Name: </b>
                {foundCountry?.nativeName}
              </p>
              <p>
                <b>Population: </b>
                {foundCountry?.population?.toLocaleString()}
              </p>
              <p>
                <b>region: </b>
                {foundCountry.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {foundCountry.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {foundCountry?.capital || "No Capital"}
              </p>
            </div>
            <div className="content-details-two">
              <p>
                <b>Top Level Domain: </b>
                {topLevelDomain}
              </p>
              <p>
                <b>Currencies: </b>
                {Currencies}
              </p>
              <p>
                <b>Languages: </b>
                {Languages}
              </p>
            </div>
          </div>

          <div className="border-details">
            <p className="border-label">
              <b>Border Countries:</b>
            </p>

            <div className="border-countries">
              {borderDetail?.length ? (
                borderDetail.map(
                  (country) =>
                    country && (
                      <span
                        className={`border-tag ${isDark ? "dark-mode" : ""}`}
                        key={country.alpha3Code}
                      >
                        <Link to={`/${country.name}`} state={country}>
                          {country.name}
                        </Link>
                      </span>
                    ),
                )
              ) : (
                <span>No Border Country</span>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CountryDetail;

//  const params = useParams();
//   // const { state } = useLocation();

//   const [isDark] = useTheme();
//   const countryName = params.country;

//   const contriesdata = useContext(CountriesDataContext);

//   //🚩State Variables
//   // const [foundCountry, setFoundCountry] = useState(state || null); // object hai aik Country ka
//   // const [countriesData, setCountriesData] = useState([]);
//   const [notFound, setNotFound] = useState(false); // agr data.find() mai country nahi mili tu else k case mai setNotFound
//   const [loading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   if (state) return;

//   //   fetch("http://localhost:3000/countries")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setCountriesData(data);
//   //       const country = data.find(
//   //         (item) =>
//   //           item.name.toLowerCase().trim() === countryName.toLowerCase().trim(),
//   //       );

//   //       if (country) {
//   //         setFoundCountry(country);
//   //       } else {
//   //         setNotFound(true);
//   //       }

//   //       setLoading(false);
//   //     })
//   //     .catch(() => {
//   //       setNotFound(true);
//   //       setLoading(false);
//   //     });
//   // }, [countryName, state]);

//   const foundCountry = contriesdata.find(
//     (country) =>
//       country.name.toLowerCase().trim() == countryName.toLowerCase().trim(),
//   );
