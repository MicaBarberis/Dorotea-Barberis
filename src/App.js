import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    
    <div className="container">
      <NavBar />
   <div className='products-container'>
      <ItemListContainer section="Todos los productos" />
   </div>
    </div>
  );
}

export default App;
