import '../styles/Popup.css';
import { colors, buttonColors } from './Colors';

const Popup = ({ data = {}, setIndex }) => {
    const { abilities = [], sprites = {}, stats = [], name = "", types = [] } = data;
    let total = 0;

    return (
        <div className="popup" role={'button'} onClick={() => setIndex(-1)}>
            <div className='popup-container'>
                <div className='popup-content'>
                    <div className='popup-left' style={{ backgroundColor: colors[types[0].type.name] }}>
                        <h2 className='name'>{name}</h2>
                        <img src={sprites.front_default} />
                        <h3>Abilities</h3>
                        <ul className='ability-list'>
                            {abilities.map(i => <li style={{ backgroundColor: buttonColors[types[0].type.name] }} key={i.slot} className='name'>{i.ability.name}</li>)}
                        </ul>
                    </div>
                    <div className='popup-right'>
                        <h2 style={{ color: colors[types[0].type.name] }}>Base Stats</h2>
                        <ul className='stats-list'>
                            {stats.map(i => {
                                const progressWidth = (Number(i.base_stat) / 150) * 100;
                                total += Number(i.base_stat);

                                return <li className='stats-container'>
                                    <div className='stats name'>{i.stat.name} {i.base_stat}</div>
                                    <div className='progress-bar'>
                                        <div className='progress-done' style={{ width: `${progressWidth}%`, backgroundColor: colors[types[0].type.name] }}></div>
                                    </div>
                                </li>
                            })}
                        </ul>
                        <h5>Total: {total}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;