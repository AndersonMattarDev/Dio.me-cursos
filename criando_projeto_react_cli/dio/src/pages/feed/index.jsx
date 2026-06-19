

import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighLight } from "./styles ";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";


const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Card />
        <UserInfo percentual={45} nome="Anderson Mattar" image="https://avatars.githubusercontent.com/u/119048066?v=4&size=64"/>
      </Container>
    </>
  );
};
export { Feed };
