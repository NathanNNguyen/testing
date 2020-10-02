import React, { useState, useContext } from "react";
import { CityContext } from "../../contexts/CityContext";
import { Drawer, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { MiniSearchBar } from "../common/MiniSearchBar";

const VizButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  background-color: #656665;
  margin-top: 3rem;
  border: 0px;
  border-radius: 6px;
  width: 75%;
  height: 2vw;
  font-size: 1vw;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;
const CityListContainer = styled.div`
  margin-top: 6rem;
`;
const CityName = styled.p`
  display: inline;
  margin: 0 1rem 0 0;
`;
const CityNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.3rem 0;
`;

const VizDrawer = () => {
  const [visible, setVisible] = useState(false);
  const { comparisonList, getData, removeCity } = useContext(CityContext);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <VizButton
        type="primary"
        onClick={showDrawer}
        className="update-cities-button"
      >
        Update Cities
      </VizButton>
      <Drawer
        title="Search Cities"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <MiniSearchBar getData={getData} />
        <CityListContainer>
          <h6>Selected Cities</h6>
          {comparisonList.map((city, index) => (
            <CityNameContainer>
              <CityName>{city.city}</CityName>
              <CloseOutlined
                className="anticon-close"
                onClick={() => {
                  removeCity(index);
                }}
              />
            </CityNameContainer>
          ))}
        </CityListContainer>
      </Drawer>
    </>
  );
};

export default VizDrawer;
