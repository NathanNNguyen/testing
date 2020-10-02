import React from "react";
import styled from "styled-components";

import { PlusCircleOutlined } from "@ant-design/icons";

const CardComparison = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  color: whitesmoke;
  width: 29%;
  height: 150px;
  min-width: 300px;
  margin: 1rem;
  border-radius: 3px;
  flex-grow: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    transform: scale(1.02);
    transition-duration: 0.1s;
  }

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

  background: rgba(112, 199, 131, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:after {
    content: "";
    position: absolute;
    left: 100%;
    height: 0;
    width: 0;
    border-left: 11.5px solid rgba(112, 199, 131, 0.8);
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
  background: rgba(112, 199, 131, 0.8);

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 1.1rem;
`;

function StatCard(props) {
  return (
    <CardComparison>
      <CardHeader>{props.city}</CardHeader>
    </CardComparison>
  );
}

export default StatCard;
