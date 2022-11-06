import '../styles/Popup.css';

const Popup = () => {
    return (
        <div className="popup">
            <div className='popup-container'>
                <div className='popup-content'>
                    <div className='popup-left'>
                        <h2>Bulbasar</h2>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"} />
                        <p>Abilities</p>
                        <ul className='ability-list'>
                            <li>Overgrown</li>
                            <li>Strong</li>
                        </ul>
                    </div>
                    <div className='popup-right'>
                        <h2>Base Stats</h2>
                        <ul className='stats-list'>
                            <li className='stats-container'>
                                <div className='stats'>Hp 80</div>
                                <div className='progress-bar'>
                                    <div className='progress-done' style={{ width: 20 }}></div>
                                </div>
                            </li>
                            <li className='stats-container'>
                                <div className='stats'>Hp 80</div>
                                <div className='progress-bar'></div>
                            </li>
                        </ul>
                        <h5>Total: 525</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;