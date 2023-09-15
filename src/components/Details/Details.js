import React from "react";
import details from "../../images/Details.svg";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">Мы просим вас не дарить нам цветы, после торжества мы сразу уезжаем в долгожданное путешествие и не успеем насладиться этой красотой! 
      Но, по желанию, выразить вашу любовь и радость можно в виде бутылки вина или шампанского, которое, мы обещаем, не завянет.</p>
    </section>
  );
}

export default Details;