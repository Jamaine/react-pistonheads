import React, { Component, PropTypes } from 'react';

export default class Select extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onChange(event.target.value);
  }
  render() {
    // let optionElements = [
    //   <option value="" key="prompt">{this.props.prompt}</option>
    // ];
    //
    // for (let key in this.props.options) {
    //   if (this.props.options.hasOwnProperty(key)) {
    //     optionElements.push(
    //       <option value={key}>{this.props.options[key]}</option>
    //     )
    //   }
    // }
    const { name, value, className, options } = this.props;
    const optionList = options.map((option, id) =>
      <option
        value={option.ModelId}
        key={id}>{option.Name}
      </option>
    );
    optionList.unshift(
      <option value="prompt" key="prompt">
        {this.props.prompt}
      </option>
    );

    return (
      <select
        name={name}
        id={this.props.id}
        value={value}
        className={className}
        onChange={this.handleChange}>
        {optionList}
      </select>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  // options: PropTypes.object.isRequired,
  prompt: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};
