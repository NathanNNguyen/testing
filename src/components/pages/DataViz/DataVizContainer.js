import React, { useState, useContext, useEffect } from "react";
import { CityContext } from "../../../contexts/CityContext";
import RenderDataViz from "./RenderDataViz";
import styled from "styled-components";

import Header from "../../common/Header";
import { ReactComponent as DriftlyLogo } from "../../../assets/driftlyLogo.svg";
import VizDrawer from "../../common/VizDrawer.js";

const Container = styled.div`
  display: flex;
`;
const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`;
const MenuWrapper = styled.div`
  background-color: #70c783;
  min-height: 100vh;
  width: 15%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const DataOptionsList = styled.div`
  margin-top: 6rem;
`;
const DataOption = styled.div`
  color: #ffffff;
  margin: 1rem 0;

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5vw;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

function DataVizContainer(props) {
  const { comparisonList } = useContext(CityContext);

  const [showData, setShowData] = useState({
    jobs: false,
    realEstate: true,
    weather: true
  });
  const [title, setTitle] = useState("");

  useEffect(() => {
    buildTitle();
  });

  const buildTitle = () => {
    console.log(`comparison list: ${comparisonList}`);
    let tempTitle = "";
    comparisonList.forEach(city => {
      console.log("running");
      console.log(city.city);
      tempTitle = tempTitle.concat(city.city, " -- ");
    });
    tempTitle = tempTitle.slice(0, -4);
    setTitle(tempTitle);
  };

  return (
    <Container>
      <MenuWrapper>
        <DriftlyLogo className="menuLogo" />
        <DataOptionsList>
          <DataOption
            onClick={() =>
              setShowData(showData => ({
                ...showData,
                jobs: !showData.jobs
              }))
            }
          >
            JOBS
          </DataOption>
          <DataOption
            onClick={() =>
              setShowData(showData => ({
                ...showData,
                realEstate: !showData.realEstate
              }))
            }
          >
            REAL ESTATE
          </DataOption>
          <DataOption
            onClick={() =>
              setShowData(showData => ({
                ...showData,
                weather: !showData.weather
              }))
            }
          >
            WEATHER
          </DataOption>
        </DataOptionsList>
        <VizDrawer />
      </MenuWrapper>

      <DataWrapper>
        <Header />
        <h1 className="viz-title">{title}</h1>
        <RenderDataViz showData={showData} />
      </DataWrapper>
    </Container>
  );
}

export default DataVizContainer;
