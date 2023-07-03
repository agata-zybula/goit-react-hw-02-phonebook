import { Component } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.resetForm();
  };
  //dopóki użytkownik nie wyśle dnaych z formularza, nie wiemy co się w nim dzieje (formularz niekontrolowany)

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }); // aktualizacja stanu
    // console.log(this.state.name);
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={css.formContainer}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <div className={css.inputContainer}>
            <label className={css.label}>Name</label>
            <input
              className={css.inputStyle}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
            <label className={css.label}>Number</label>
            <input
              className={css.inputStyle}
              value={number}
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
            <button className={css.buttonStyle} type="submit">
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
