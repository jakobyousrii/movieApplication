import React from 'react';
import { useState } from 'react';
import { Container } from './styled-compoents/Container';
import { NavStyled } from './styled-compoents/NavStyled';
import { FaSearch, FaTimes, FaPlayCircle, FaHamburger } from "react-icons/fa";
import Form from './UI/Form';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useGetGenresQuery } from '../stores/MovieRTK';


const Navbar = () => {
    const [searchToggle, setSearchToggle] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [toggleButton, setToggleButton] = useState(false);
    const { data: genreData } = useGetGenresQuery();
    const location = useLocation();

    const hambHandler = () => {
        setToggleButton(prev => !prev);
    if (searchToggle) {
        setSearchToggle(prev => !prev);
    }
}

const searchHandler = () => {
    setSearchToggle(prev => !prev);
    if(toggleButton){
        setToggleButton(prev => !prev);
    }
}

return (
    <NavStyled>
        <Container>
            <Link to="/"><FaPlayCircle style={{ fontSize: "3rem" }} /></Link>
            <div className='div-links'>
                <div>
                <FaHamburger  className={`hamburger-button ${toggleButton ? "active" : ""}`} onClick={hambHandler} />
                </div>
                {toggleButton && <ul className='ul-links'>
                    <li><NavLink to="/top-rated-movies/1" className={({ isActive }) => (isActive || location.pathname.split("/")[1] === "top-rated-movies" ? 'active' : 'inactive')}>Top Rated Movies</NavLink></li>
                    <li><NavLink to="/popular-movies/1" className={({ isActive }) => (isActive || location.pathname.split("/")[1] === "popular-movies" ? 'active' : 'inactive')}>Popular Movies</NavLink></li>
                    <li onClick={() => setShowCategories(prev => !prev)}>
                        <span className='categories-header'>Categories</span>
                        {showCategories && genreData && <ul className='nav-categories'>
                            {genreData.genres.map(g => <li key={g.id}><NavLink  className={({ isActive }) => (isActive || Number(location.pathname.split("/")[2]) === g.id ? 'active' : 'inactive')} to={`/categories/${g.id}/${g.name}/1`}>{g.name}</NavLink></li>)}
                        </ul>}
                    </li>
                </ul>
                }
            </div>
            <div className='search-div'>
                <button onClick={searchHandler} className="search-icon" >{!searchToggle ? <FaSearch /> : <FaTimes />}</button>
                {searchToggle && <Form />}
            </div>
        </Container>
    </NavStyled>
);
};

export default Navbar;