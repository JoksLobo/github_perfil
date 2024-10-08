import { useState } from 'react';
import Perfil from './components/Perfil';

import ReposList from './components/RepoList';

function App() {

  const [nomeUsuario, setNomeUsuario] = useState('');
  return(
    <div>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formularioEStaVisivel && (
        <Formulario/>
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEStaVisivel)} type='button'>Toggle form</button> */}
    </div>
  )
}

export default App
