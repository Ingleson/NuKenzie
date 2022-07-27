import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import LoginScreen from './components/LoginScreen';
import TotalValue from './components/TotalValue';

function App() {

  const [listTransictions, setListTransictions] = useState([
    { description: 'Salário recebido', type: 'Entrada', value: 2500 },
    { description: 'Conta de luz', type: 'Saída', value: 150 }
  ])

  const [filterTransictions, setFilterTransictions] = useState([]);
  const [filter, setFilter] = useState('')

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Login = () => setIsLoggedIn(true);
  const Logout = () => setIsLoggedIn(false);

  const totalPrice = listTransictions.reduce((acc,{value, type} ) => type === "Entrada" ? acc + value : acc - value, 0);

  const addListTransiction = (newListTransiction) => {
    setListTransictions([...listTransictions, newListTransiction]);
  }

  useEffect(() => {
    const newFilter = listTransictions.filter((listTransiction) => listTransiction.type === filter);
    setFilterTransictions(newFilter)
  }, [filter]);

  return (
    <div className='NuKenzie'>
      {isLoggedIn ?
        <>
          <Header Logout={Logout} />
          <main>
            <div className='form-value-box'>
              <Form addListTransiction={addListTransiction} />
              {listTransictions.length > 0 ? <TotalValue totalPrice={totalPrice} /> : <div></div>}
            </div>
            <List listTransictions={listTransictions} filterTransictions={filterTransictions} setFilter={setFilter} />
          </main>
        </>
        :
        <LoginScreen Login={Login} />
      }
    </div>
  );
}

export default App;
