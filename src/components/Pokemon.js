import { Col, Row } from 'react-bootstrap';

import '../styles/Pokemon.css';

const Pokemon = () => {
    const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png";
    return (
        <div className='pokemon-container'>
            <div className='pokemon-detail'>
                <p>#001</p>
                <h3>Bulbasar</h3>
                <div>Grass</div>
            </div>
            <div className='pokemon-detail'>
                <div className='pokemon-img-container'>
                    <img src={img} />
                </div>
            </div>
        </div>
    )
}

export default Pokemon;