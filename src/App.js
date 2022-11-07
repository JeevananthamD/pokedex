import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from "axios";

import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import Paginate from './components/Paginate';
import './App.css';


function App() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchData();
  }, [offset]);

  const fetchData = async () => {
    try {
      // This api call provides the link to get individual pokemon details
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`);
      const pokemons = response.data.results;
      const totalPokemons = response.data.count;
      const pokemonDetails = [];

      setPageCount(Math.ceil(totalPokemons / itemsPerPage));

      // Fetching all the details of the pokemon one by one.
      for (const pokemon of pokemons) {
        const pokemonDetail = await axios.get(pokemon.url);
        pokemonDetails.push(pokemonDetail.data);
      }

      setData(pokemonDetails);
    }
    catch (e) {
      console.log("Error", e);
      setData([]);
    }
  }

  // To fetch pokemon using name
  const fetchDataByName = async (name) => {
    try {
      if (name) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPageCount(1);
        setData([response.data]);
      }
      else {
        fetchData();
      }
    }
    catch (e) {
      console.log("Error", e);
      setData([]);
    }
  }

  return (
    <div className="App">
      <Navbar fetchDataByName={fetchDataByName} />
      <PokemonList data={data} />
      <Paginate
        setOffset={setOffset}
        itemsPerPage={itemsPerPage}
        pageCount={pageCount}
      />
    </div>
  );
}

export default App;
