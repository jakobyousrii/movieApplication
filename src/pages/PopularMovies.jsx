import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import SearchComp from '../components/SearchComp/SearchComp';
import { Container } from '../components/styled-compoents/Container';
import { Flex } from '../components/styled-compoents/Flex';
import { Loading } from '../components/styled-compoents/Loading';
import { PaginateMovies } from '../components/styled-compoents/PaginateMovies';
import { StyledSearch } from '../components/styled-compoents/StyledSearch';
import { usePopularMoviesQuery } from '../stores/MovieRTK';

const PopularMovies = () => {
   const {page} = useParams();
   const [newPage, setNewPage] = useState(page);
    const navigate = useNavigate();
    const { data, isLoading } = usePopularMoviesQuery(newPage);
    let content;

    const handlePageClick = (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setNewPage(e.selected  + 1);
    }

    useEffect(()=>{
        navigate(`/popular-movies/${newPage}`);
    },[newPage, navigate])

    if (!isLoading) {
        content = <Loading />
    }
    if (data) {
        content = (
            <Container direction="column">
                <Flex direction="column">
                    <StyledSearch>
                        <section>
                            {data && data.results && data.results.map(movie => movie.poster_path && <SearchComp key={movie.id} movie={movie} />)}
                        </section>
                    </StyledSearch>
                </Flex>
                <ReactPaginate
                    previousLabel={`<`}
                    pageCount={50}
                    breakLabel={"..."}
                    nextLabel={">"}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"page-container"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                    initialPage={page - 1}
                />
            </Container>
        )
    }

    return (
        <PaginateMovies>
            <Jumbotron
                header="Popular / Tranding Movies"
                pOne="Check the list of the current popular movies!"
                pTwo="Explore the world of movies where you can see the most popular - worldwide movies!"
                src="/images/statistic.svg"
                imgWidth="90%"
                imgHeight="100%"
                parentImg={false}
                jumboHeight="60vh"
                aboutPosition="center"
                shape="true"
            />
            {content}
        </PaginateMovies>
    );
};

export default PopularMovies;