import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import aboutUs from './pages/AboutUs';
import Detail from './pages/Detail'



function App() {
  return (
    
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='productos' element={<Products/>} />
        <Route path='/productos/:id' element={<Detail/>} />
        <Route path='contacto' element= {<Contact/>} />
        <Route path='sobrenosotros' element= {<aboutUs/>} />
        <Route path='*' element={<h1>Error 404. Pagína no encontrada</h1>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
