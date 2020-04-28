import React, { useState } from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helpers';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  outline: none;
  -webkit-appearance: none;
`

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background: #26C6DA;
  }

`;

const Error = styled.div`
  background: red;
  color: white;
  padding: 1rem;
  width: 100;
  text-align: center;
  margin-bottom: 2rem;
`;


const Form = ({ setResumen, setLoading }) => {
  const [data, setData] = useState({
    marca: '',
    year: '',
    plan: ''
  });

  const [error, setError] = useState(false);

  // Extraer los valores del state

  const { marca, year, plan } = data;

  // Pasar los datos del form al state

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // Cuando el usuario presionasubmit

  const handleSubmit = (event) => {
    event.preventDefault();

    // validar data form

    if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }

    setError(false);

    // una base de 2000
    let resultado = 2000

    // obtener la diferencia de años

    const diferencia = obtenerDiferenciaYear(year);

    // por cada año hay que restar el 3%
    const operation = (resultado * .03) * diferencia;
    resultado = resultado -  operation;


    // Americano 15%
    // Asiatico 5%
    // Europeo 30%

    resultado = calcularMarca(marca) * resultado;


    // Básico aumenta 20%
    // completo 50%

    resultado = parseFloat((obtenerPlan(plan) * resultado).toFixed(2));

    // Total
    
    // Enviar datos al state principal, App y simular async
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setResumen({
        cotizacion: resultado,
        data,
      })
    }, 4000)

  }

  return ( 
    <form
    onSubmit={handleSubmit}
    >

      {error && <Error >Todos los campos son obligatorios</Error>}

      <Campo>
        <Label>Marca</Label>
        <Select 
          name="marca"
          value={marca}
          onChange={handleChange}
  
        >
          <option value="">-- seleccionar --</option>
          <option value="americano">Americano</option>
          <option value="europe">Europe</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select 
        name="year"
        value={year}
        onChange={handleChange}
        
        >
        <option value="">-- Seleccione --</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>

        {/* Cuando creamos inputs de type radio, si vammos a escoger entre uno y otro
            todos deben tener el mismo name para que selecciones solamente uno de todas las
            opciones
        */}

      <InputRadio 
        type="radio"
        name="plan"
        value="basico"
        checked={plan === "basico"}
        onChange={handleChange}
      /> Básico

      <InputRadio 
        type="radio"
        name="plan"
        value="completo"
        checked={plan ==="completo"}
        onChange={handleChange}
      /> Completo
      </Campo>

      <Button type="submit">Cotizar</Button>
    </form>
   );
}

Form.propTypes = {
  setResumen: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired, 
};
 
export default Form;