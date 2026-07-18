import { Link } from "react-router";

function CountryCard(props) {
  return (
    <Link
      to={`/${props.countryName}`}
      className="Country-Card"
      state={props.data}
    >
      <img src={props.countryImage} alt="Flag-img" />
      <div className="country-card-content ">
        <h3>{props.countryName} </h3>
        <p>
          <b>Population: </b>
          {props.countryPopulation.toLocaleString()}
        </p>
        <p>
          <b>Region: </b> {props.countryRegion}
        </p>
        <p>
          <b>Capital: </b> {props.countryCapital}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
