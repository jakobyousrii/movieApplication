import React from 'react';
import { Container } from './styled-compoents/Container';
import { Flex } from './styled-compoents/Flex';
import { JumbotronStyled } from './styled-compoents/Jumbotron';

const Jumbotron = ({ header, pOne, pTwo, src, srcTwo, bg, imgWidth, imgHeight, parentImg, jumboHeight, aboutPosition, shape, categories }) => {

    return (
        <JumbotronStyled
            background={bg || "linear-gradient(to right,#003171,royalblue);"}
            imgWidth={imgWidth || "80%"} 
            imgHeight={imgHeight || "100%"} 
            parentImg={parentImg} 
            jumboHeight={jumboHeight || "auto"}
            aboutPosition={aboutPosition}
            shape={shape}
            categories={categories}
            >
            <Container>
                <Flex gap="8rem">
                    {srcTwo && <div className='jumbo-img'>
                        <img src={srcTwo} alt="cam" />
                    </div>}
                    <div className='jumbo-about'>
                        <h1>{header}</h1>
                        <p>{pOne}</p>
                        <p>{pTwo}</p>
                    </div>
                    <div className='jumbo-img'>
                        <img src={src} alt={header} />
                    </div>
                </Flex>
            </Container>
        </JumbotronStyled>
    );
};

export default Jumbotron;