import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";
import { Link } from "react-router-dom";
import { IHeader } from "./types"

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo da DIO" />
          </Link>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>

              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>

        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/119048066?v=4&size=64" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Link to="/login"><Button title="Entrar" /></Link>
              <Link to="/register"><Button title="Cadastrar" /></Link>
              
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
//parei em 17:46 da aula 