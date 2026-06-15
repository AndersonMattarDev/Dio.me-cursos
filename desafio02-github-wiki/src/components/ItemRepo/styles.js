import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  a {
    color: #fafafa;
    text-decoration: none;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: #ff0000;
  cursor: pointer;
  padding: 0;
  margin-top: 8px;
`;
