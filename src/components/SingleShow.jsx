import React, { useState } from 'react';
import { Button } from './styled-compoents/Button';
import { Container } from './styled-compoents/Container';
import { Flex } from './styled-compoents/Flex';
import { StyledShow } from './styled-compoents/SingleShow';
import Trailer from './Trailer';

const SingleShow = ({ items: {backdrop_path, poster_path, release_date, genres, original_title, overview, vote_average, runtime } }) => {

    const [clickTrailer, setClickTrailer] = useState(false);
    const hours =Math.floor(runtime/60);
    const minutes = runtime%60;
    const date = release_date.slice(0, 4);
    const allGenres = genres.map(g => g.name);
    const img = `https://image.tmdb.org/t/p/w500/${poster_path}`

    const onClickHandler = ()=>{
        setClickTrailer(prev => !prev);
    }

    return (
        <StyledShow background={backdrop_path}>
            <Container>
                <Flex gap="3rem" firstWidth="30%" secondWidth="70%">
                    <article className='img-article'>
                        <img src={img} alt="" />
                    </article>
                    <article className='article-about'>
                        <span className='star'>{vote_average} &#9733;</span>
                        <small>{hours > 0 && `${hours}h and`} {minutes} minutes</small>
                        <h2>{original_title}</h2>
                        <small>{date}</small>
                        <small>{allGenres.join(", ")}</small>
                        <p>{overview}</p>
                        <div>
                            <Button onClick={onClickHandler}>{!clickTrailer ? "WATCH NOW": "HIDE TRAILER"}</Button>
                        </div>
                        {clickTrailer && <Trailer/>}
                    </article>
                </Flex>
            </Container>
        </StyledShow>
    );
};

export default SingleShow;