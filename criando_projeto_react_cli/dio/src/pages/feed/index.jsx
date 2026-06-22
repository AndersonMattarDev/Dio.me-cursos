

import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighLight } from "./styles ";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";


const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        
        <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </Column>

      <Column flex={1}>
      <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
      <UserInfo percentual={90} nome="Anderson Mattar" image="https://avatars.githubusercontent.com/u/119048066?v=4&size=64"/>
      <UserInfo percentual={80} nome="Anderson Mattar" image="https://avatars.githubusercontent.com/u/119048066?v=4&size=64"/>
      <UserInfo percentual={70} nome="Anderson Mattar" image="https://avatars.githubusercontent.com/u/119048066?v=4&size=64"/>
      <UserInfo percentual={60} nome="Anderson Mattar" image="https://avatars.githubusercontent.com/u/119048066?v=4&size=64"/>
      <UserInfo percentual={50} nome="Anderson Mattar" image="https://avatars.githubusercontent.com/u/119048066?v=4&size=64"/>      
      </Column>

        
      </Container>
    </>
  );
};
export { Feed };
