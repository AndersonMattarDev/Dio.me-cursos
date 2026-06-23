import styled from 'styled-components';

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

export const TitleLogin = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
`;

export const SubtitleLogin = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #a8a8a8;
  margin-bottom: 24px;
`;

export const EsqueciText = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: #E5E044;
  text-decoration: none;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const CriarText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #8139d3;
  margin-top: 8px;
  margin-left: 95px;

  a {
    color: #8139d3;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

