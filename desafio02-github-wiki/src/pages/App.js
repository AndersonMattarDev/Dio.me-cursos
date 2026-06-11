import gitLogo from '../Assets/background.png'
import { Container } from './styles'
import Input from '../components/Input';
import  ItemRepo  from '../components/ItemRepo'

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub logo" /> 
       <Input />
       <ItemRepo />
    </Container>
  );
}

export default App;
