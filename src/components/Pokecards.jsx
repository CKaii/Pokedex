import React from 'react';

function Pokecards(props) {
  const pokeImage =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  let imgSrc = `${pokeImage}${props.id}.png`;
  return (
    <div className="pokeCard">
      <h1>{props.name}</h1>
      <img src={imgSrc} />
      <h2>type: {props.type}</h2>
      <h2>base experience: {props.experience}</h2>
    </div>
  );
}

export default Pokecards;
