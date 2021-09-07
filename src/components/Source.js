import React from "react";
import "../index.css";
import styled from '@emotion/styled';
import { ReactComponent as Git } from "../img/github.svg";
import { ReactComponent as Cv } from "../img/cv.svg";

const Container = styled.div`
  width: 25%;
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
  z-index: 15;
`;

const A = styled.a`
    width: 50%;
`;
const Source = () => {
  return (
    <Container>
      <A
        href="https://github.com/Maza-Alain/Vangstore/tree/master"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <Git className="srcSvg1" />
      </A>

      <A
        href="https://drive.google.com/file/d/1X6SCrff1JTuzjpVvx9NUL4Ay8StgEp5M/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <Cv className="srcSvg1" />
      </A>
      
    </Container>
  );
};

export default Source;
