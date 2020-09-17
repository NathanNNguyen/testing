import React from "react";
import styled from "styled-components";
import { ReactComponent as MailLogo } from "../../assets/mail4.svg";
import { ReactComponent as Driftly } from "../../assets/driftly.svg";
import { ReactComponent as Tagline } from "../../assets/letsFindOurNextHome.svg";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <Driftly />
        <MailLogo className="mail" />
      </div>
      <Tagline className="tagline" />
    </Wrapper>
  );
};

export default Hero;
