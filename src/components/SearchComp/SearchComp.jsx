import React from 'react';
import { Link } from 'react-router-dom';
// import Aos from "aos";
// import 'aos/dist/aos.css';

const SearchComp = ({ movie: { original_title, original_name, release_date, poster_path, id, vote_average } }) => {


    const imgUrl = `http://image.tmdb.org/t/p/w500/${poster_path}`;
    let content;
    content = (
        <Link to={`/imdb/${id}`}>
            <article>
                <img className='single-img' src={imgUrl} alt={original_title} />
                <div>
                    <h4>{original_name ? `${original_name.slice(0, 25)} ${original_name.length > 25 ? "..." : ""}` :
                        `${original_title.slice(0, 25)} ${original_title.length > 25 ? "..." : ""}`}</h4>
                    <small>{release_date && release_date.slice(0, 4)}</small>
                    <small style={{color: "yellow", fontWeight:"700"}}>{vote_average} &#9733;</small>
                </div>
            </article>
        </Link>
    )
    return (
        <>
            {content}
        </>
    )

};

export default SearchComp;