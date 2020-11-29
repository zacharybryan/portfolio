import React from 'react';
import { useSpring, animated } from 'react-spring';


function CardInfo(props) {
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <animated.div className='' style={style}>
            <p className=''>{props.title}</p>
            <p className=''>{props.subTitle}</p>
            <a href={props.link} target='_blank' rel=''>View</a>
        </animated.div>
    )
}

export default CardInfo