import React from "react";
import { Container, WelcomeText, StyledButton } from "./ColumnA.styles";

interface ColumnAProps {
  rickMorty?: boolean;
}

const ColumnA: React.FC<ColumnAProps> = ({ rickMorty }) => {
  return (
    <Container>
      <WelcomeText>
        {rickMorty
          ? "Bienvenidos"
          : "Bienvenido al mundo mágico de Harry Potter"}
      </WelcomeText>
      <StyledButton>Entrar</StyledButton>
    </Container>
  );
};

export default ColumnA;
