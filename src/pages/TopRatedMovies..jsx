import React, { useEffect, useState } from 'react';
import { useTopRatedMoviesQuery } from '../stores/MovieRTK';
import ReactPaginate from "react-paginate";
import { PaginateMovies } from '../components/styled-compoents/PaginateMovies';
import SearchComp from '../components/SearchComp/SearchComp';
import { Container } from '../components/styled-compoents/Container';
import { Flex } from '../components/styled-compoents/Flex';
import { StyledSearch } from '../components/styled-compoents/StyledSearch';
import Jumbotron from "../components/Jumbotron";
import { Loading } from '../components/styled-compoents/Loading';
import { useNavigate, useParams } from 'react-router-dom';

const TopRatedMovies = () => {
    const {page} = useParams();
    const navigate = useNavigate();
    const [newPage, setNewPage] = useState(page);
    const { data, isLoading } = useTopRatedMoviesQuery(newPage);
    let content;


    useEffect(()=>{
        navigate(`/top-rated-movies/${newPage}`)
    },[newPage, navigate])

    const handlePageClick = (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setNewPage(e.selected  + 1);
    }

    if (isLoading) {
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
                        pageCount={data.total_pages}
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
                        initialPage={page-1}
                    />
                </Container>
        )
    }

    return (
        <PaginateMovies>
            <Jumbotron
                header="Top Rated Movies Of All Time"
                pOne="Check The list of the top rated movies of all time created by IMDB!"
                pTwo="Fell free and explore every bit of a page to find the one movie you may like!"
                src="/images/stars.svg"
                imgWidth="100%"
                imgHeight="100%"
                parentImg={false}
                jumboHeight="60vh"
                aboutPosition="center"
                shape="true"
                direction="row-reverse"
            />
            {content}
        </PaginateMovies>
    );
};

export default TopRatedMovies;