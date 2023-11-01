import React from "react";

function Card({region,imgSrc,captial,populationCount,countryName}) {
  return (
    <div className="shadow-lg rounded-lg m-5" style={{ width: 250, height: 310 }}>
      <img
        className="rounded-lg"
        src={`${imgSrc}`}
        alt="country image"
        width={"250"}
        height={"300"}
      />
      <div className="flex flex-col px-4 py-2">
        <h2 className="text-xl font-medium pb-2">{`${countryName}`}</h2>
        <p>Population: {`${populationCount}`}</p>
        <p>Region: {`${region}`}</p>
        <p>Capital: {`${captial}`}</p>
      </div>
    </div>
  );
}

export default Card;

//{region,imgSrc,captial,populationCount,countryName}