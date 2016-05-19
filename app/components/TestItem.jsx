import React from 'react';

const Test = (props) => {
  return (
    <div onClick={props.handleClick}>{props.name}</div>
  );
};

export default Test;
