import React from 'react';

import Jumbo from '../components/Jumbo.js'

function HomePage(props) {
    return(
        <div>
            <Jumbo title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );
}

export default HomePage;