import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class ContactForm extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event) => {
        console.log(event);
        // otherwise target value
        const target = event.target;  
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
// Only alows one email 
        this.setState({
            disabled: true,
        });

        Axios.post('http://localhost:3030/api/email', this.state)
        .then(res => {
            if(res.data.success) {
                this.setState({
                    disabled: false,
                    emailSent: true
                });
            } else {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            }
        })
        .catch(err => {
            console.log(err);

            this.setState({
                disabled: false,
                emailSent: false
            });
        })
    }

    render() {
        return (
        
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='full-name'>Full Name</Form.Label>
                    <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='message'>Message</Form.Label>
                    <Form.Control id='message' name='message' as='textarea' rows="4" value={this.state.message} onChange={this.handleChange}></Form.Control>
                </Form.Group>

                <Button className='d-inline-block' variant='primary' type='submit' disabled={this.state.disabled}>
                    SEND
                </Button>

                {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent</p>}
                {this.state.emailSent === false && <p className='d-inline err-msg'>Email Unsuccessful</p>}
            </Form>
    )
}
}

export default ContactForm;