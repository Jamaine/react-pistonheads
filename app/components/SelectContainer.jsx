import React, { Component, PropTypes } from 'react';
import Select from './select.jsx';

export default class SelectContainer extends Component {
  render() {
    // const { name, value, prompt, options, handleChange } = this.props;
    return (
      <Select
        name={this.props.name}
        id={this.props.id}
        value={this.props.value}
        prompt={this.props.prompt}
        options={this.props.options}
        onChange={this.props.handleChange} />
    );
  }
}

SelectContainer.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  prompt: PropTypes.string,
  options: PropTypes.array,
  handleChange: PropTypes.func
};
