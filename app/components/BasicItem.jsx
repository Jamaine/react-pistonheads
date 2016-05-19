import React, { Component, PropTypes } from 'react';

// export default function BasicItem(props) {
//   const { title, artist, img } = props;
//
//   return (
//     <li onClick={props.handleClick()}>
//       <p>{title}</p>
//       <p>{artist}</p>
//     </li>
//   );
// }

export default class BasicItem extends Component {
  constructor(props) {
    super(props);
    this.localClick = this.localClick.bind(this);
  }
  localClick() {
    this.props.handleClick(this.props.artist)
  }
  render() {
    const { title, artist } = this.props;

    return (
      <li onClick={this.localClick}>
        <p>{title}</p>
        <p>name {artist}</p>
      </li>
    );
  }
}

BasicItem.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

BasicItem.defaultProps = {
  title: 'default title',
  artist: 'default artist'
};
