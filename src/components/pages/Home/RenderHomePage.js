import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CityContext } from "../../../contexts/CityContext";
import CityCard from "../../common/CityCard.js";
import CardComparison from "../../common/CardComparison.js";
import Header from "../../common/Header.js";
import Hero from "../../common/Hero.js";
import { AutoComplete } from "../../common/AutoComplete.js";

//import CityCardModal from "../../common/CityCardModal.js";

function RenderHomePage() {
  const {
    cities,
    comparisonList,
    setComparisonList,
    addCity,
    removeCity,
    isComparing,
    setIsComparing,
    getData
  } = useContext(CityContext);

  const [showStats, setShowStats] = useState(false);

  let history = useHistory();

  if (comparisonList.length <= 3) {
    return (
      <div>
        <Header />
        <Hero />
        <AutoComplete
          addCity={addCity}
          cities={cities}
          setComparisonList={setComparisonList}
          getData={getData}
        />

        {isComparing && (
          <div className="comparison-container">
            <div className="comparison">
              {comparisonList.map((data, index) => (
                <CardComparison
                  key={index}
                  removeCity={() => removeCity(index)}
                  showStats={showStats}
                  data={data}
                />
              ))}
            </div>
            <button
              className="compareButton"
              onClick={() => {
                setShowStats(true);
              }}
            >
              Compare Cities
            </button>
            <button
              className="moreInfoButton"
              onClick={() => {
                history.push("/dataviz");
              }}
            >
              More Info
            </button>
          </div>
        )}

        <div className="container">
          {cities.map((city, index) => (
            <CityCard
              key={index}
              city={city.location}
              image={city.image}
              index={index}
              setIsComparing={setIsComparing}
              addCity={addCity}
              getData={getData}
              cities={cities}
            />
          ))}
        </div>
      </div>
    );
  } else if (comparisonList.length > 3) {
    alert("Can only compare at most 3 cities!");
  }
}
export default RenderHomePage;
