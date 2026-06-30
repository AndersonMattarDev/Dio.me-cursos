import { useNavigate } from "react-router-dom";


import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighLight } from "./styles ";
import BannerImage from "../../assets/Banner.png";

const Home = () => {

  const navigate = useNavigate();
  
  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />{" "}
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare o seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar Agora!" variant="secondary" onClick={handleClickSignIn}/>
        </div>
        <div>
          <img src={BannerImage} alt="Banner" />
        </div>
      </Container>
    </>
  );
};
export { Home };
