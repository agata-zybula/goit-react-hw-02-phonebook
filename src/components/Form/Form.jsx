// import PropTypes from 'prop-types';
import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    this.props.onSubmit({ name });
    this.setState({ name: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }); // aktualizacja stanu
    // console.log(this.state.name);
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Phonebook</label>
          <input
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
