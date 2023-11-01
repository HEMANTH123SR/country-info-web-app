import React, { useEffect, useState } from "react";
import InputContent from "./InputContent";
import Card from "./Card";

function Home() {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const dataJson = await response.json();
      setCountryData(dataJson);
      console.log(countryData);
    };
    fetchData();
  }, []);
  return (
    <div className="p-14">
      <InputContent />
      <div className="">
        {Array.isArray(countryData) && countryData.length > 0 ? (
          countryData.map((data) => (
            <Card
              key={data.cca2}
              countryName={data.name.common}
              captial={
                data.capital && data.capital.length > 0 ? data.capital[0] : "NA"
              }
              region={data.region}
              populationCount={data.population}
              imgSrc={data.flags.png}
              alt={data.flags.alt}
            />
          ))
        ) : (
          <p>soory something is definetly wrong 😔</p>
        )}
      </div>
      l
    </div>
  );
}

export default Home;

////{region,imgSrc,captial,populationCount,countryName}
