import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Jumbo(props) {

    return(
        <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
            <Container fluid='true'>
                <Row className='justify-content-center py-5'>
                    {/* typical sizes for screens */}
                    <Col md={8} sm={12}>
                        { props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1> }
                        { props.subTitle && <h3 className='display-4 font-weight-lighter'>{props.subTitle}</h3> }
                        { props.subText && <h3 className='lead font-weight-light'>{props.subText}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Jumbo;