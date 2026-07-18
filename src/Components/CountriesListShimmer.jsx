import "./CountriesListShimmer.css";

function CountriesListShimmer() {
  const anArray = Array.from({ length: 10 }).map((el, i) => (
    <div key={i} className="Country-Card shimmer-cardList"></div>
  ));

  return <div className="Countries-Container">{anArray}</div>;
}

export default CountriesListShimmer;
