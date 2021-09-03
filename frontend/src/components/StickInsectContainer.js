import React, { useState } from "react";
import styled from "styled-components";

const StyledStickInsect = styled.div`
  & {
    position: absolute;
    top: ${(props) => props.topPos || Math.floor(Math.random() * 80) + 10}%;
    left: ${(props) => props.leftPos || Math.floor(Math.random() * 80) + 10}%;
    color: #ffffff;
    padding: 1rem;
    transform: rotate(${Math.floor(Math.random() * 180)}deg);
    background-color: #964b00;
  }
`;

const StyledInsectContainer = styled.div`
        & {
            position: relative;
            width: 100%
            height: 100%
        }
    `;

export function StickInsectContainer(props) {
  const [randLeftPos, setLeftPos] = useState("");
  const [randTopPos, setTopPos] = useState("");

  const updateInsect = () => {
    alert("Found me!");
    setLeftPos(Math.floor(Math.random() * 80) + 10);
    setTopPos(Math.floor(Math.random() * 80) + 10);
  };

  return (
    <StyledInsectContainer>
      <StyledStickInsect
        leftPos={randLeftPos}
        topPos={randTopPos}
        onClick={updateInsect}
      >
        Stick Insect
      </StyledStickInsect>
    </StyledInsectContainer>
  );
}

export default StickInsectContainer;
