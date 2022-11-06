import { Col, Row } from 'react-bootstrap';

import '../styles/Pokemon.css';

const Pokemon = () => {
    const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png";
    return (
        <div className='col-xl-3 col-lg-4 col-md-6 col-12 mt-4'>
            <div className='pokemon-container row align-items-center'>
                <div className=' col-6'>
                    <p>#001</p>
                    <h3>Bulbasar</h3>
                    <div>Grass</div>
                </div>
                <div className='col-6'>
                    <img src={img} />
                </div>
            </div>
        </div>
    )
}

export default Pokemon;