import React from "react";
import { Container, Image } from "./ColumnB.styles";
import harryImage from "../../assets/harry.png";

interface ColumnBProps {
  rickMorty?: boolean;
}

const ColumnB: React.FC<ColumnBProps> = ({ rickMorty }) => {
  return (
    <Container>
      <Image src={harryImage} alt="Harry Potter" />
      <Image src={harryImage} alt="Harry Potter" />
    </Container>
  );
};

export default ColumnB;
