import React from 'react';
import Content from '../components/Content.js';
import Jumbo from '../components/Jumbo.js';
import Headshot from '../assets/images/head-shot.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

function AboutPage(props) {
    return (
        <div>
            <Jumbo className='justify-content-center' title={props.title} />
            <Content>
                <Row className='float-left'>
                <Col>
                <img className='float-left' src={Headshot}></img>
                </Col>
                <Col>
                <p className="float-left">Hi, Im Zachary Bryan, Zach for short. I am originally from South Carolina but I am currently living in Sunny San Diego, California. By trade I am a bartender but I also am a Full Stack Web Developer. My favorite things do always include a cold drink and some happy music. Check out some of my work in my Portfolio.</p>
                </Col>
                </Row>
            </Content>
        </div>
    )
}

export default AboutPage;
