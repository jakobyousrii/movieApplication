import React from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SearchComp from '../components/SearchComp/SearchComp';
import { getSearchMovies, removeMovies } from '../stores/searchReducer/searchReducer';
import { StyledSearch } from '../components/styled-compoents/StyledSearch';
import { Container } from '../components/styled-compoents/Container';
import { Flex } from '../components/styled-compoents/Flex';

const Search = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const searchMovies = useSelector(state => state.search.movies);
    let queryText = new URLSearchParams(location.search);
    console.log(queryText);
    const s = queryText.get("s");
    console.log(s);
    const query = useMemo(() => s, [s]);

    useEffect(() => {
        if (query) {
            dispatch(getSearchMovies(query));

            return () => {
                dispatch(removeMovies());
            }
        }
    }, [query, dispatch]);

    console.log(searchMovies.results)
    return (
        <>
            <Container>
                <Flex direction="column">
                    <StyledSearch>
                        {s && <p className='result-paragraph'>Results from your search: "{s}"</p>}
                        <section>
                            {searchMovies && searchMovies.results &&  searchMovies.results.map(movie => movie.poster_path && <SearchComp key={movie.id} movie={movie}/>)}
                        </section>
                        {!searchMovies && <p>No result {s && "for your search..."}</p>}
                    </StyledSearch>
                </Flex>
            </Container>
        </>
    );
};

export default Search;