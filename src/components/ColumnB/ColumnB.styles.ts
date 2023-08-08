import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: 40vh;
  background: linear-gradient(
    to bottom right,
    #890001 0%,
    #9f0000 25%,
    #d8a40e 50%,
    #e1b43d 75%,
    #000000 100%
  );
  border-radius: 10px;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
`;
