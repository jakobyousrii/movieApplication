import React from 'react';
import { Loading } from '../styled-compoents/Loading';

const LoadingSpinner = ({width, position}) => {
    return (
        <Loading position={position}  width={width}>
            
        </Loading>
    );
};

export default LoadingSpinner;