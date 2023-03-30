import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
//criando um estado do estado em que o React vai olhar
const [usuario,setUsuario] = useState("")
const [senha,setSenha] = useState("")
let navigate = useNavigate();

const setLogin = () => {
  if(usuario === "igor" && senha === "1234" ){
    return navigate("Home")
  }
}



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{usuario}</code> and save to reload.
        </p>
        
        <label>Usuario</label>
        {/*fixando o valor do usuario*/}
        <input value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>

        <label>senha</label>
        {/*fixando o valor do senha*/}
        <input value={senha} type="password" onChange={(e) => setSenha(e.target.value)}></input>

        <button onClick={() => setLogin()}>
          Login 
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
