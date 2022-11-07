import { padStart } from 'lodash';

import '../styles/Pokemon.css';
import { colors, buttonColors } from './Colors';

const Pokemon = ({ pokemonData = {}, setIndex, index }) => {
    const { name = "", sprites = {}, id = "", types = [] } = pokemonData;

    return (
        <div className='pokemon-container' role={'button'} style={{ backgroundColor: colors[types[0].type.name] }} onClick={() => setIndex(index)}>
            <div className='pokemon-detail'>
                <div className='pokemon-no'>#{padStart(id, 3, 0)}</div>
                <h3 className='pokemon-name'>{name}</h3>
                <div className='pokemon-type-container'>
                    {types.map((i, index) => <div className='pokemon-type' style={{ backgroundColor: buttonColors[types[index].type.name] }} key={i.slot}>{i.type.name}</div>)}
                </div>
            </div>
            <div className='pokemon-detail'>
                <div className='pokemon-img-container'>
                    <img src={sprites.front_default} />
                </div>
            </div>
        </div>
    )
}

export default Pokemon;