import React from "react";
import ColumnA from "../ColumnA/ColumnA";
import { Container } from "./HomPage.styles";
import ColumnB from "../ColumnB/ColumnB";

const HomePage = () => {
  return (
    <div>
      <Container>
        <ColumnA />
        <ColumnB />
      </Container>
      <Container>
        <ColumnB rickMorty={true} />
        <ColumnA rickMorty />
      </Container>
    </div>
  );
};

export default HomePage;
