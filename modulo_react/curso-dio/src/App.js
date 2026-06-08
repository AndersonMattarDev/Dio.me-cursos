import React, {useState, useEffect} from 'react';


const App = () => {

  const [usuario, setUsuario] = useState("");
  const [count, setCount] = useState(0);
  const [usuarios, setUsuarios] = useState(["Pablo", "José", "Manoel"]); 
  
  const handleAddUser = () => {
    setUsuarios([...usuarios, usuario]);
    setUsuario("");
  };

  useEffect(() => {
    setCount(usuarios.length);
  },[usuarios]);

  return (
    <div className="App">
      <h1>Olá, mundo!</h1>
      <h2>Usuários: {count}</h2>
      <div>
      <input value={usuario} onChange={(event) => setUsuario(event.target.value)} />
      <button onClick={handleAddUser}>Adicionar</button>
      </div>
      <hr />
      
      {
        usuarios.map((item) => (
          <p key={item}>{item}</p>
        ))
      }
    </div>
  );
};

export default App;
