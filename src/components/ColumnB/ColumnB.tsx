import React from "react";
import { Container, Image } from "./ColumnB.styles";
import harryImage from "../../assets/harry.png";
import rick from "../../assets/rick.png";

interface ColumnBProps {
  rickMorty?: boolean;
}

const ColumnB: React.FC<ColumnBProps> = ({ rickMorty }) => {
  return (
    <Container data-testid="columnB">
      {rickMorty ? (
        <div data-testid="columnBWithProps">
          <Image src={rick} alt="Rick and Morty" />
        </div>
      ) : (
        <Image src={harryImage} alt="Harry Potter" />
      )}
    </Container>
  );
};

export default ColumnB;
