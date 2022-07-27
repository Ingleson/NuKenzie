import './style.css';
import Trash from '../../assets/trash.png'

function List({listTransictions, filterTransictions, setFilter}) {

  return(
    <aside>
      <section className="header-card">
        <p>Resumo financeiro</p>
        <div className="btn-filter">
          <button className="btn-all" onClick={() => setFilter('')}>Todos</button>
          <button className="btn-appetizer" onClick={() => setFilter('Entrada')}>Entradas</button>
          <button className="btn-expense" onClick={() => setFilter('Saída')}>Despesas</button>
        </div>
      </section>
      <ul>
        {(filterTransictions.length > 0 ? filterTransictions : listTransictions).map(({ description, type, value }, index) => 
          <li className="card" key={index}>
            <div className="description-type-box">
              <p>{description}</p>
              <span>{type}</span> 
            </div>
            <div className='value-btn-box'>
            <span>  R$ {type === 'Saída' ? '-' : ''}{value} </span>
            <button><img src={Trash} alt="lixo" /></button>
            </div>
          </li>
        )}
      </ul>
    </aside>
    
  )
}

export default List;