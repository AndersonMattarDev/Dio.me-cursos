import { FiThumbsUp } from "react-icons/fi";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./style";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://media.istockphoto.com/id/2158706715/pt/foto/abstract-lines-neon-lines-of-speed-and-fast-wind-effect-of-moving-at-the-speed-of-light-blue.jpg?s=1024x1024&w=is&k=20&c=F1sqgkAlfYCZIVns7vq-KS3tbVLQ3hqqi3HRBjjTaFU=" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/119048066?v=4&size=64" />
          <div>
            <h4>Anderson Moreno Mattar</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de html e css no bootcamp da dio do Global
            avanade... <strong>Ver Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #javaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
