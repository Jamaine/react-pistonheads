import React, { Component } from 'react';
import SelectContainer from './SelectContainer.jsx';
import options from '../helpers/options';

export default class Filters extends Component {
  constructor() {
    super();
    this.state = { current: '', options: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({ options: this.getData() });
  }
  handleChange(value) {
    this.setState({ current: value });
  }
  getData() {
    return options().options;
  }
  render() {
    console.log(this.state.current)
    return (
      <div>
        <form action="">
          <SelectContainer
            name="select model"
            id="models"
            prompt="prompt user action"
            value={this.state.current}
            options={this.state.options}
            handleChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
