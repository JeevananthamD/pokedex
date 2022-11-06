import { Container, Row } from 'react-bootstrap';

import Pokemon from "./Pokemon";
import "../styles/Pokemon.css";

const PokemonList = () => {
    return (
        <div className='PokemonList container-xxl'>
            <div class="row">
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
            </div>
        </div>
    )
}

export default PokemonList;