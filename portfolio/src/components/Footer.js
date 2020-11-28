import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import App from '../App';

function Footer() {

    return (
        <footer className='mt-5'>
            <Container fluid='true'>
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md={3} sm={12}>
                        Zach Bryan
                    </Col>
                    <Col className='p-0 d-flex justify-content-end' md={3}>
                        Copywrite (c) Zach Bryan
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer;