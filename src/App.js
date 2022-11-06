import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import Paginate from './components/Paginate';
import Popup from './components/Popup';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <PokemonList />
      <Paginate />
      {/* <Popup /> */}
    </div>
  );
}

export default App;
