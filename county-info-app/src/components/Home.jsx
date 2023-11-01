import React, { useEffect, useState } from "react";
import InputContent from "./InputContent";
import Card from "./Card";

function Home() {
  const [countryData, setCountryData] = useState([]);
  const [searchRegion, setSearchRegion] = useState("all");
  const [searchCountry, setSearchCountry] = useState("all");

  useEffect(() => {
    let route = "all";

    if (searchCountry !== "all" && searchCountry.length > 0) {
      route = `name/${searchCountry}`;
    } else if (searchRegion !== "All") {
      route = `region/${searchRegion}`;
    }

    const fetchData = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/${route}`);
      const dataJson = await response.json();
      setCountryData(dataJson);
    };

    fetchData();
  }, [searchRegion, searchCountry]);

  return (
    <div className="p-14">
      <InputContent
        handlerForSearchCountry={setSearchCountry}
        handlerForSearchRegion={setSearchRegion}
        searchRegion={searchRegion}
        searchCountry={searchCountry}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
              imgSrc={data.flags.svg}
              alt={data.flags.alt}
            />
          ))
        ) : (
          <p>Sorry, something is definitely wrong 😔</p>
        )}
      </div>
    </div>
  );
}

export default Home;
