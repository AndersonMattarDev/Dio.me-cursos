import { useState, useCallback } from "react";

const Teste = () => {
  const [age, setAge] = useState("Anderson");
  const [name, setName] = useState(49);

  //useMemo = referencias em variáveis(const, var, let ...).
  //useCallback = referencia de função. 

  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;    console.log('age atual', age, newAge)
    
    setAge((prev) => (prev === 49 ? 32 : 49));
  }, [age]);

  const handleChangeName = useCallback(() => {

    console.log("Alterou o nome")
    setName((prev) => (prev === "Anderson" ? "José" : "Anderson"));
  }, []);

 



  console.log("Renderizou");

  return (
    <div>
      <p>
        Idade: {age}
      </p>
      <br />
      <p>
        Nome: {name}
      </p>
      <br />      
      <button onClick={handleChangeName}>Alterar Nome</button>
      <br />
      <br />
      <button onClick={handleChangeAge}>Alterar Idade</button>
    </div>
  );
};

export { Teste };
