import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  max-width: 1400px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    padding: 5px;
  }
`;
