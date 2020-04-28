import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { ConvertirMayuscula } from '../helpers';

const ContainerResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background: #00838F;
  color: #FFF;
  margin-top: 1rem;
`;

const Resumen = ({ marca, year, plan }) => {

  if (marca === '' || year === '' || plan === '') return null

  return ( 
    <ContainerResumen>

      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: { ConvertirMayuscula(marca) }</li>
        <li>Plan: { ConvertirMayuscula(plan) }</li>
        <li>Año del auto: {year}</li>
      </ul>
    </ContainerResumen>
   );
}
Resumen.propTypes = {
  marca: PropTypes.string,
  plan: PropTypes.string,
};
 
export default Resumen; 