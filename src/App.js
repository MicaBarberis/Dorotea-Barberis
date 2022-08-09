import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Components/Context/CartContext';
import CartPage from './pages/Cart';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {
  return (
    
    <CartProvider>
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='productos' element={<Products/>} />
        <Route path='/category/:categoryName' element={<ItemListContainer />} />
        <Route path='/productos/:id' element={<ItemDetailContainer/>} />
        <Route path='contacto' element= {<Contact/>} />
        <Route path='sobrenosotros' element= {<AboutUs/>} />
        <Route path='Cart' element={<CartPage />} />
        <Route path='*' element={<h1>Error 404. Página no encontrada</h1>}/>
      </Routes>

    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
