import React, { useState } from 'react';
import styled from '@emotion/styled'

import Header from './components/Header';
import Form from './components/Form';
import Resumen from './components/Resumen';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background: #FFF;
  padding: 3rem;
`

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    data: {
      marca: '',
      year: '',
      plan: '',
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <Container>

      <Header 
      title="Cotizador de seguros" 
      />

      <ContainerForm>
        <Form 
        setResumen={setResumen}
        setLoading={setLoading}
        />

        { loading && <Spinner/> }
        <Resumen  {...resumen.data} />
        {!loading && <Result  cotizacion={resumen.cotizacion} />}
      </ContainerForm>
    </Container>
    
  );
}

export default App;
