import React from "react";
import { Container, WelcomeText, StyledButton } from "./ColumnA.styles";
import { useTranslation } from "react-i18next";
interface ColumnAProps {
  rickMorty?: boolean;
}

const ColumnA: React.FC<ColumnAProps> = ({ rickMorty }) => {
  const { i18n } = useTranslation();
  return (
    <Container>
      <WelcomeText>
        {rickMorty
          ? i18n.t("welcome_message_rick_morty")
          : i18n.t("welcome_message_harry_potter")}
      </WelcomeText>
      <StyledButton>{i18n.t("action_button")}</StyledButton>
    </Container>
  );
};

export default ColumnA;
