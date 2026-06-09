import { Header } from '../../components/Header';
import background from '../../Assets/background.png';
import ItemList from '../../components/ItemList';
import './styles.css';

function App() {
  return (
    <div className="App"> 
        <Header />
        <div className="conteudo">
          <img src={background} className="background"  alt="Background"/>
          <div className="info">
            <div>
              <input name="usuario" placeholder="@username" />
              <button type="submit">Buscar</button>
            </div>  
            <div className="dados-perfil">
              <div className="perfil">
                <img 
                 src="https://avatars.githubusercontent.com/u/119048066?s=400&u=8f38d78a434b7c5835bb4076a00a56a804c6a184&v=4"
                 className="profile-photo"  
                 alt="Foto perfil"
                 />
              </div>
              <div className='profile'>
                <h3>Anderson Mattar</h3>
                <span>@AndersonMattarDev</span>
                <p> I'm front end and back end developer jr</p>
              </div>
            </div>
            <hr />
            <div>
              <h4 className='repositorio'>Repositórios</h4>
              <ItemList title="teste1" description="teste de descrição"/>
              <ItemList title="teste1" description="teste de descrição"/>
              <ItemList title="teste1" description="teste de descrição"/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;


