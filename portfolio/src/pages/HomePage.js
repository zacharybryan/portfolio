import React from 'react';

import Carousel from '../components/Carousel.js';
import Jumbo from '../components/Jumbo.js'


function HomePage(props) {
    return (
        <div>
        <Jumbo title={props.title} subTitle={props.subTitle} subText={props.subText} />
        <Carousel />
        </div>
    );
}

export default HomePage;