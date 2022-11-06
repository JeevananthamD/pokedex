import { Container, Row } from 'react-bootstrap';

import Pokemon from "./Pokemon";
import "../styles/Pokemon.css";

const PokemonList = () => {
    return (
        <div className='PokemonList container-xxl'>
            <Pokemon />
            <Pokemon />
            <Pokemon />
            <Pokemon />
            <Pokemon />
        </div>
    )
}

export default PokemonList;