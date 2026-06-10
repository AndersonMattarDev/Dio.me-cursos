import {useState} from 'react';
import { Header } from '../../components/Header';
import background from '../../Assets/background.png';
import ItemList from '../../components/ItemList';
import './styles.css';

function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleGetData = async () => {
    if (!user.trim()) {
      console.log('Informe um usuário para buscar.');
      return;
    }

    setCurrentUser(null);
    setRepos([]);

    try {
      const userDataResponse = await fetch(`https://api.github.com/users/${user}`);
      const data = await userDataResponse.json();

      if (data) {
        const { avatar_url, name, bio } = data;
        setCurrentUser({ avatar_url, name, bio });

        const reposDataResponse = await fetch(`https://api.github.com/users/${user}/repos`);
        const newRepos = await reposDataResponse.json();

        setRepos(newRepos || []);
      }

      console.log('Dados do usuário:', data);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);      
    }
    
  };

  return (
    <div className="App"> 
        <Header />
        <div className="conteudo">
          <img src={background} className="background"  alt="Background"/>
          <div className="info">
            <div>
              <input name="usuario" value={user} 
              onChange={event => setUser(event.target.value)} 
              placeholder="@username" />
              <button type="button" onClick={handleGetData}>Buscar</button>
            </div>  
            {currentUser?.name ? (
            <>
             <div className="dados-perfil">
                <div className="perfil">
                  <img 
                   src={currentUser?.avatar_url || 'https://via.placeholder.com/120'}
                   className="profile-photo"  
                   alt="Foto perfil"
                   />
                </div>
                <div className='profile'>
                  <h3>{currentUser?.name || 'Usuário não encontrado'}</h3>
                  <span>@{user}</span>
                  <p>{currentUser?.bio || 'Sem bio disponível'}</p>
                </div>
              </div>
              <hr /> 
            </>               
            ) : null}

          {currentUser?.name ? (
            <div>
              <h4 className='repositorio'>Repositórios</h4>
              {repos.length ? (
                repos.map((repo) => (
                  <ItemList key={repo.id} title={repo.name} description={repo.description || 'Sem descrição'} />
                ))
              ) : null}
            </div>
          ) : null}
          </div>
        </div>
    </div>
  );
}

export default App;


