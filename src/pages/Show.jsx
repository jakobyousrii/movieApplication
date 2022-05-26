import React from 'react';
import { useParams } from 'react-router-dom';
import SingleShow from '../components/SingleShow';
import { ShowPage } from '../components/styled-compoents/ShowPage';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useMoviesQuery } from '../stores/MovieRTK';

const Show = () => {
    const { imdbId } = useParams();
    const {data, isLoading} = useMoviesQuery(imdbId);
    
    let content;
    if(isLoading){
        content = <LoadingSpinner position="absolute" width="60px"/>
    }
    if(data){
        content = <SingleShow key={data.id} items={data} />;
    }
    return (
        <ShowPage>
            {content}
        </ShowPage>
    );
};

export default Show;