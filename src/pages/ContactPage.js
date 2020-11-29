import React from 'react';
import Content from '../components/Content.js';
import Jumbo from '../components/Jumbo.js';
import Form from '../components/ContactForm.js';


class ContactPage extends React.Component {

    render() {
        return (
            <div>
                <Jumbo title={this.props.title} />

                <Content>
                    <Form />
                </Content>
            </div>
        );
    }
}

export default ContactPage;