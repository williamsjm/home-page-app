import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 40vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;

`;

export const WelcomeText = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  background-color: #262626;
  color: white;
  padding: 10px 50px;
  border-radius: 50px; // bordes totalmente redondos
  border: none;
  cursor: pointer;
`;
