import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import Microsoft from './Paginas/Microsoft';
import Navegador from './Paginas/Navegador';
import MacOS from './Paginas/MacOS';
import Linux from './Paginas/Linux';
import Acercade from './Paginas/Acercade';
import Brave from './Paginas/Brave';
import Form from './Paginas/Form';
import Galeria from './Paginas/Galeria';
import Google from './Paginas/Google';
import Android from './Paginas/Android';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navegador/>}>
        <Route path='/Inicio' element={<Inicio/>}></Route>
        <Route path='/Microsoft' element={<Microsoft/>}></Route>
        <Route path='/MacOS' element={<MacOS/>}></Route>
        <Route path='/Linux' element={<Linux/>}></Route>
        <Route path='/Acercade' element={<Acercade/>}></Route>
        <Route path='/Brave' element={<Brave/>}></Route>
        <Route path='/Form' element={<Form/>}></Route>
        <Route path='/Galeria' element={<Galeria/>}></Route>
        <Route path='/Google' element={<Google/>}></Route>
        <Route path='/Android' element={<Android/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
