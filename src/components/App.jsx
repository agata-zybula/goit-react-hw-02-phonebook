import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addName = name => {
    const { contacts } = this.state;
    const contactName = contacts.map(contact => {
      return contact.name;
    });

    console.log('contactName', contactName);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addName} />
        <Contacts />
      </div>
    );
  }
}
