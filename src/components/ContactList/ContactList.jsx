import { Component } from 'react';
import css from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <div className={css.contactsContainer}>
        <ul className={css.listStyle}>
          {contacts.map(contact => {
            return (
              <div key={contact.id}>
                <li className={css.listItem}>
                  {contact.name}: {contact.number}
                  <button
                    type="button"
                    className={css.buttonDelete}
                    onClick={() => deleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
