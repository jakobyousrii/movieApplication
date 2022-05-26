import React from 'react';
import { useTrailerQuery } from '../stores/MovieRTK';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './UI/LoadingSpinner';

const Trailer = () => {
    const { imdbId } = useParams();
    const { data, isLoading } = useTrailerQuery(imdbId);

    let content;
    if (data && data.results.length > 0) {
        const url = `https://www.youtube.com/embed/${data.results[0].key}`;
        content = (
            <iframe title={data.results[0].name} width="100%" height="400px" src={url} frameBorder="0" allowFullScreen></iframe>
        )
    }
    else if(isLoading){
        content = <LoadingSpinner/>
    }
    else{
        content = <p>No video.</p>
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Trailer;