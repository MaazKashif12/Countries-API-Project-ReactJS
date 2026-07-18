import "./CountryDetailShimmer.css";

function CountryDetailShimmer() {
  return (
    <section className="country-details-container country-details-shimmer">
      <div className="country-details-img shimmer-img"></div>
      <div className="content-details-section content-details-shimmer">
        <div id="heading"></div>
        <div className="details"></div>
        <div className="details"></div>
        <div className="details"></div>
        <div className="details"></div>
      </div>
    </section>
  );
}

export default CountryDetailShimmer;
