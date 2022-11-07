import { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ fetchDataByName }) => {
    const [value, setValue] = useState("");
    const timeout = useRef(null);

    const getData = (e) => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            fetchDataByName(e.target.value.trim().toLowerCase());
        }, 1000);
    }

    return (
        <nav className='navbar-container container-fluid'>
            <div className='row align-items-center justify-content-between'>
                <div className='logo-container col-lg-6'>
                    <h1>Pokedex</h1>
                    <div>Search Pokemon by name</div>
                </div>
                <div className='search-container col-lg-6'>
                    <FaSearch />
                    <input type='text' placeholder='What Pokemon are you looking for?' onChange={(e) => getData(e)} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;