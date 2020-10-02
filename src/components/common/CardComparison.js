import React from "react";
import styled from "styled-components";

import { MinusCircleOutlined } from "@ant-design/icons";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: whitesmoke;
  width: 25%;
  height: 200px;
  min-width: 300px;
  margin: 2rem;
  border-radius: 3px;
  flex-grow: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CardHeader = styled.div`
  position: absolute;
  width: 25%;
  height: 15%;
  left: 0px;
  top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  font-size: 1.25vw;
  text-align: center;

  background: rgba(112, 199, 131, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:after {
    content: "";
    position: absolute;
    left: 100%;
    height: 0;
    width: 0;
    border-left: 11.5px solid rgba(112, 199, 131, 0.9);
    border-right: 11.5px solid transparent;
    border-bottom: 11.5px solid transparent;
    border-top: 11.5px solid transparent;
  }

  @media (max-width: 1106px) {
    font-size: 1.2rem;
    font-size: 1.5vw;
  }
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    font-size: 1.75vw;
  }
  @media (max-width: 737px) {
    font-size: 1.2rem;
    font-size: 3vw;
  }
`;

const CardFooter = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 3px;
  background: rgba(112, 199, 131, 0.9);

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 1.1rem;
`;

function CardComparison(props) {
  return (
    <CardContainer
      style={{ background: `url(${props.data.image}) no-repeat center` }}
    >
      <CardHeader>{props.data.city}</CardHeader>
      <button
        className="plus-button"
        onClick={e => {
          props.removeCity(e);
          // props.removeCity([props.city, props.image]);
        }}
      >
        <MinusCircleOutlined className="plus-sign" />
      </button>
      {props.showStats && (
        <div className="stat-section">
          <ul>
            <li>Housing: ${props.data.housing}</li>
            <li>Total Manufacturing: {props.data.jobs.toFixed(2)}</li>
            <li>Weather: {props.data.weather.toFixed(0)} degree</li>
          </ul>
        </div>
      )}
    </CardContainer>
  );
}

export default CardComparison;
