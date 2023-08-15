import styled from "styled-components";

interface ContainerProps {
  rickMorty?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 40%;
  height: 40vh;
  background: #262626;
  border-radius: 10px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
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

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;
