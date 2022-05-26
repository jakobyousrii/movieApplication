import React from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import SearchComp from '../components/SearchComp/SearchComp';
import { Container } from '../components/styled-compoents/Container';
import { Flex } from '../components/styled-compoents/Flex';
import { PaginateMovies } from '../components/styled-compoents/PaginateMovies';
import { StyledSearch } from '../components/styled-compoents/StyledSearch';
import { useGetGenreMoviesQuery } from '../stores/MovieRTK';
import { categoriesDesign } from '../common/categories';


const Categories = () => {

    const {id, name, page} = useParams();
    const navigate = useNavigate();
    const { data } = useGetGenreMoviesQuery({id, page});
    let content;
    const category = categoriesDesign.filter(c => c.type === name)[0];

    
    const handlePageClick = (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/categories/${id}/${name}/${e.selected  + 1}`)

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
                    pageCount={100}
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
                    forcePage={page - 1}
            />
        </Container>
        )
    }
    return (
        <PaginateMovies>
            <Jumbotron
            header={category.header} 
            pOne={category.aboutOne}
            pTwo={category.aboutTwo}
            src={category.img}
            imgWidth="15rem"
            imgHeight= "100%"
            parentImg={false}
            jumboHeight= "60vh"
            aboutPosition="center"
            shape="true"
            direction="row-reverse"
            categories="true"
            />
            {content}
        </PaginateMovies>
    );
};

export default Categories;