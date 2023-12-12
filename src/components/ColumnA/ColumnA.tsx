import React from "react";
import { Container, WelcomeText, StyledButton } from "./ColumnA.styles";
import { useTranslation } from "react-i18next";
import { navigateToUrl } from "single-spa";

interface ColumnAProps {
  rickMorty?: boolean;
}

const ColumnA: React.FC<ColumnAProps> = ({ rickMorty }) => {
  const { i18n } = useTranslation();
  const goToPage = () => {
    navigateToUrl(rickMorty ? "/rick-and-morty" : "/harry-potter");
  };

  return (
    <Container data-testid="columnA">
      <WelcomeText>
        {rickMorty
          ? i18n.t("welcome_message_rick_morty")
          : i18n.t("welcome_message_harry_potter")}
      </WelcomeText>
      <StyledButton onClick={goToPage}>{i18n.t("action_button")}</StyledButton>
    </Container>
  );
};

export default ColumnA;
