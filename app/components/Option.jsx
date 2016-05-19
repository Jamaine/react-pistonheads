import React, { Component, PropTypes } from 'react';

export default class Option extends Component {
  render() {
    const { ModelId, id, Name } = this.props;
    return (
      <option
        value={ModelId}
        key={id}>
        {Name}
      </option>
    );
  }
}

Option.propTypes = {
  ModelId: PropTypes.string,
  id: PropTypes.string,
  Name: PropTypes.string
};
