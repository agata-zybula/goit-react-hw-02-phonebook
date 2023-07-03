import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilteredContacts } from './FilteredContacts/FilteredContacts';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  addName = data => {
    const newContact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    };

    const { contacts } = this.state;
    const addedName = contacts.map(contact => {
      return contact.name;
    });

    if (addedName.includes(data.name)) {
      return alert(`${data.name} is already in contacts.`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        }; // dodaje kontakt do tablicy - aktualizuje stan(setState). Operator spread ... aby React widział, że to nowa tablica i że zmienił się jej stan (state)
      });
      // console.log('newContact', newContact);
    }
  };

  // showContactsOnList = () => {
  //   const { contacts } = this.state;
  //   return contacts;
  // };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = newValue => {
    this.setState({
      filter: newValue,
    });
  };

  render() {
    return (
      <div className={css.appContainer}>
        <h1 className={css.header}>Phonebook</h1>
        {/* na poziomie propsow decyduje, co ma sie zadziac z danymi - czyli jak bedzie submit, to co chce zrobic z danymi (np. wyslac do backendu, wyswietlic na stronie itp.)
        onSubmit, to nie jest nazwa konkretnie przypisana, mozna wpisac cokowiek, ale warto aby bylo to opisowe dla innego programisty */}
        <ContactForm onSubmit={this.addName} />
        <h2 className={css.header}>Contacts</h2>
        <FilteredContacts onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.showFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
