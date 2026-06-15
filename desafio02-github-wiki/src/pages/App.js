import { useState } from "react";
import gitLogo from "../Assets/background.png";
import { Container } from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import {api} from "../services/api";

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data && data.id) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo('');
      }
    } catch (err) {
      console.error(err);
    }
    
  };

  const handleRemoveRepo = (id)  => {
    setRepos(repos.filter((repo) => repo.id !== id));
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />
      )}      
    </Container>
  );
}

export default App;
