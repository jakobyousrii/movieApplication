import React, { useEffect } from 'react';
import { Card, Image } from './styled-compoents/Card';
import { Container } from './styled-compoents/Container';
import { Flex } from './styled-compoents/Flex';
import AOS from "aos";
import "aos/dist/aos.css";

const CardSection = ({ content: { title, about, image,bg }, index }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <Card>
            <Container>
                <Flex direction={index}  gap="10rem" data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"} >
                    <div>
                        <h2>{title}</h2>
                        <p>{about}</p>
                    </div>
                    <Image bg={bg} src={`/images/${image}`} alt={title} />
                </Flex>
            </Container>
        </Card>
    );
};

export default CardSection;