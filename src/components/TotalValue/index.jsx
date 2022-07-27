import './style.css';

function TotalValue({totalPrice}) {
  
  return(
    <div className='base-value'>
      <div className="value-total">
        <div>
          <p>Valor total:</p>
          <span>${totalPrice}</span>
        </div>
        <span>O valor se refere ao saldo</span>
      </div>
    </div>
  )
}

export default TotalValue;