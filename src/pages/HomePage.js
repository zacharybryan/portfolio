import React from 'react';
import CarouselProjects from '../components/CarouselProjects.js';
import Jumbo from '../components/Jumbo.js'


function HomePage(props) {
    return (
        <div>
        <Jumbo title={props.title} subTitle={props.subTitle} subText={props.subText} />
        <CarouselProjects />
        </div>
    );
}

export default HomePage;