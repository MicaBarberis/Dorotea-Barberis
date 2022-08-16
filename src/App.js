import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Detail from './Components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Context/CartContext';
import CartPage from './pages/Cart';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {
  return (
    
    <CartProvider>
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='productos' element={<ItemListContainer />}/>
        <Route path='/category/:categoryName' element={<ItemListContainer />} />
        <Route path='/productos/:id' element={<Detail/>} />
        <Route path='contacto' element= {<Contact/>} />
        <Route path='cart' element={<CartPage />} />
        <Route path='*' element={<h1>Error 404. Página no encontrada</h1>}/>
      </Routes>

    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
