import './style.css';
import { useState } from 'react';

function Form({addListTransiction}) {

  const [formData, setFormData] = useState({
    description: '',
    type: 'Entrada',
    value: 0
  })

  function handleSubmit(event) {
    event.preventDefault();
    const newListTransiction = {
      description: formData.description,
      type: formData.type,
      value: Number(formData.value)
    }
    addListTransiction(newListTransiction);
  }

  

  return(
    <div className="base-form">
      <form onSubmit={handleSubmit}>
        <div className="description-box">
          <p>Descrição</p>
          <input type="text" 
          placeholder=' Digite aqui sua descrição'
          value={formData.description}
          onChange={(event) => setFormData({...formData, description: event.target.value})}
          />
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="value-and-type-box">
          <div className="value-box">
            <p>Valor</p>
            <input type="number" 
            placeholder='  1' 
            value={formData.value}
            onChange={(event) => setFormData({...formData, value: event.target.value})}
            />
          </div>
          <div className="type-box">
            <p>Tipo de valor</p>
            <select name="" id="entrOrExit"
            value={formData.type}
            onChange={(event) => setFormData({...formData, type: event.target.value})}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </div>
        <button className='btn-insert'>Inserir valor</button>
      </form>
    </div>
  )
}

export default Form;