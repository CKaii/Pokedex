import React from 'react';

function Pokecards(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>type: {props.type}</h2>
      <h2>base experience: {props.experience}</h2>
    </div>
  );
}

export default Pokecards;
