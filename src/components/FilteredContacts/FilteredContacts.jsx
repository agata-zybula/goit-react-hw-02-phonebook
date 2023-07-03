import { Component } from 'react';
import css from 'components/FilteredContacts/FilteredContacts.module.css';
import PropTypes from 'prop-types';

export class FilteredContacts extends Component {
  // state = {
  //   inputValue: '',
  // };

  // handleChange = event => {
  //   this.setState({ inputValue: event.target.value });
  //   console.log(this.state.inputValue);
  // };

  handleInputChange = event => {
    const { value } = event.target;
    this.props.onChange(value);
    // console.log('value', value);
  };

  render() {
    // const { inputValue } = this.state;
    return (
      <label className={css.searchCointainer}>
        Find contacts by name
        <input
          className={css.inputStyle}
          onChange={this.handleInputChange}
          type="text"
        />
      </label>
    );
  }
}

FilteredContacts.propTypes = {
  onChange: PropTypes.func,
};
