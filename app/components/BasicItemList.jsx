import React, { PropTypes } from 'react';
import BasicItem from './BasicItem.jsx';

export default function BasicItemList(props) {
  const items = props.items.map((item, int) => {
    const { title, artist } = item;
    return <BasicItem title={title} artist={artist} key={int} handleClick={props.handleClick} />;
  });

  return (
    <ul>
      {items}
    </ul>
  );
}

BasicItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  handleClick: PropTypes.func.isRequired
};
