import logo from './logo_clone_telecine.svg';
import arrow_ios from './arrow_left.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={arrow_ios} alt='Voltar' id="voltar" />
        <img src={logo} alt='Logo Telecine'/>
      </header>
      <div className="App-Scaffold">
        <div className='txt'>
        <h3>Bem-vindo 
          ao seu momento cinema
        </h3>
        <span>
        </span>
        </div>
        <div className='sys_login'>
          <button className='btn_login'>
            Entrar
          </button>
          <button className='btn_operadora'>
            Entrar com Operadora
          </button>
          <p className='p_onee'>Para assinante Telecine por Operadora</p>
        <div className='sys_cadastro'>
          <p>Ainda não é assinante?</p>
          <a href='https://www.telecineplay.com.br'>Assinar Agora</a>
        </div>
        </div>
      </div>
      <footer>
        <p>Convidados | Precisa de ajuda?</p>
        <span></span>
      </footer>
    </div>
  );
}

export default App;
