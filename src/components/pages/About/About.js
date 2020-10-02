import React from "react";
import styled from "styled-components";

import Header from "../../common/Header.js";
import {
  GithubOutlined,
  LinkedinOutlined,
  UserOutlined
} from "@ant-design/icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem;
  font-family: Amatic SC;
`;

const El = styled.div`
  margin: 1.5rem;
  padding-top: 1%;
  width: 40%;
  background: rgba(112, 199, 131, 0.9);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  text-align: center;
`;
function About() {
  return (
    <>
      <Header />
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Amatic SC",
          fontSize: "2rem"
        }}
      >
        A team from Lambda School
      </h2>
      <Wrapper>
        {data.map((e, index) => (
          <El key={index}>
            <UserOutlined />
            <h3 style={{ fontWeight: "700", fontSize: "1.2rem" }}>{e.name}</h3>
            <p
              style={{
                fontWeight: "700",
                fontSize: "1.1rem",
                marginBottom: "0"
              }}
            >
              {e.role}
            </p>
            <div style={{ display: "flex", fontSize: "1.2rem" }}>
              <a
                href={e.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social"
              >
                <GithubOutlined className="icon" />
                <span className="text">Github</span>
              </a>
              <a
                href={e.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="social"
              >
                <LinkedinOutlined className="icon" />
                <span className="text">LinkedIn</span>
              </a>
            </div>
          </El>
        ))}
      </Wrapper>
      <Footer>
        Copyright 2020{" "}
        <span style={{ color: "rgba(112, 199, 131, 0.9)" }}>Driftly Team</span>
      </Footer>
    </>
  );
}

const data = [
  {
    name: "Vlad",
    role: "APL",
    github: "",
    linkedIn: ""
  },
  {
    name: "Xander Bennett",
    role: "TPL",
    github: "",
    linkedIn: ""
  },
  {
    name: "Shayne Smith",
    role: "Full Stack Engineer",
    github: "",
    linkedIn: ""
  },
  {
    name: "Guillermo Alfaro",
    role: "Full Stack Engineer",
    github: "",
    linkedIn: ""
  },
  {
    name: "Nathan Nguyen",
    role: "Full Stack Engineer",
    github: "https://github.com/NathanNNguyen/",
    linkedIn: "https://www.linkedin.com/in/nathannnguyen/"
  },
  {
    name: "Michael Toce",
    role: "Data Scientist",
    github: "",
    linkedIn: ""
  },
  {
    name: "Rourke Struthers",
    role: "Data Scientist",
    github: "",
    linkedIn: ""
  },
  {
    name: "Fatai King",
    role: "Data Scientist",
    github: "",
    linkedIn: ""
  }
];

export default About;
