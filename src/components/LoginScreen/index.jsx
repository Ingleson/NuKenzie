import Nukenzie from '../../assets/Nu Kenzie(1).png';
import LoginPage from '../../assets/LoginPage.svg';
import './style.css';

function LoginScreen({Login}) {
  
  return(
    <section className="login-screen">
      <div className="introduction-img">
        <div className='introduction'>
          <img src={Nukenzie} alt="Logo" />
          <h1>Centralize o controle das suas finanças</h1>
          <span>de forma rápida e segura</span>
          <button onClick={Login}>Iniciar</button>
        </div>
        <img src={LoginPage} alt="LoginPage" />
      </div>
    </section>
  )
}

export default LoginScreen;