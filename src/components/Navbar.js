import { FaSearch } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar-container container-fluid'>
            <div className='row align-items-center justify-content-between'>
                <div className='logo-container col-lg-6'>
                    <h1>Pokedex</h1>
                    <div>Search Pokemon by name</div>
                </div>
                <div className='search-container col-lg-6'>
                    <FaSearch />
                    <input type='text' placeholder='What Pokemon are you looking for?' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;