import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1124px;
  margin: 0 auto;
  padding: 230px 20px;
  display: flex;
  flex-direction: row;
  gap: 300px;
  align-items: center;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
`;

export const TitleRegister = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
`;

export const SubtitleRegister = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #a8a8a8;
  margin-bottom: 24px;
`;

export const TenhoConta = styled.p`
  font-family: Open Sans;
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  color: #ffffff;
  line-height: 100%;
  letter-spacing: 0%;
  margin-top: 8px;
`;

export const FazerLogin = styled.a`
  font-family: Open Sans;
  line-height: 100%;
  font-size: 14px;
  font-weight: 700;
  color: #17b812;
  letter-spacing: 0%;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 5px;

  a {
    color: #17b812;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
