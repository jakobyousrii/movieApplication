import React from 'react';
import { useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const Form = () => {

    const searchRef = useRef();
    const location = useLocation();
    let queryText = new URLSearchParams(location.search).get("s");
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        let data = searchRef.current.value;
        if(queryText === data){
            return;
        }
        else if(data.trim().length > 0){
            navigate(`/search/?s=${data}`);
            searchRef.current.value = ""
        }
    }

    return (
        <form onSubmit={formHandler}>
            <input ref={searchRef} placeholder='search for a movie...' />
            <button className='search-icon'><FaSearch /></button>
        </form>
    );
};

export default Form;