import { Container, Row } from 'react-bootstrap';

import Pokemon from "./Pokemon";
import Popup from './Popup';
import "../styles/PokemonList.css";
import { useEffect, useState } from 'react';

const PokemonList = ({ data = [] }) => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className='pokemonList container-xxl'>
                {data.map((i, index) => <Pokemon pokemonData={i} setIndex={setIndex} index={index} />)}
            </div>
            {index != -1 && <Popup data={data[index]} setIndex={setIndex} />}
        </>
    )
}

export default PokemonList;