import { FaSearch } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo-container'>
                <h1>Pokedex</h1>
                <div>Search Pokemon by name</div>
            </div>
            <div className='search-container'>
                <FaSearch/>
                <input type='text' placeholder='What Pokemon are you looking for?'/>
            </div>
        </nav>
    )
}

export default Navbar;