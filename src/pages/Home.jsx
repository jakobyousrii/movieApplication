import React from 'react';
import { cartContent } from '../common/cartContent';
import CardSection from '../components/CardSection';
import Jumbotron from '../components/Jumbotron';
import { StyledHome } from '../components/styled-compoents/StyledHome';

const Home = () => {
    return (
        <StyledHome>
            <Jumbotron
                header="Welcome To Movieflex, The Most Useful Movie Related Page!"
                pOne="Fell free to search for any movie of your choice, just to learn more about!"
                pTwo="The goal and the mission of our project is to users fell reliefed by knowing which movie to choose!"
                src="images/mrbean.svg"
                imgWidth="100%"
                imgHeight= "86vh"
                parentImg={true}
                jumboHeight="86vh"
            />
            {cartContent.items.map((content, index) => <CardSection key={content.id} content={content} index={index} />)}
        </StyledHome>
    );
};

export default Home;