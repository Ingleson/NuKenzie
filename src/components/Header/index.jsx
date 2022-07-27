import Nukenzie from '../../assets/Nu Kenzie.png'
import "./style.css";

function Header({Logout}) {

  return(
    <header>
      <div className='structure-header'>
        <img src={Nukenzie} alt="logo" />
        <button onClick={Logout}>Início</button>
      </div>
    </header>
  )
}

export default Header;