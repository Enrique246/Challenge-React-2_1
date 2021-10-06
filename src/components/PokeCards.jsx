import React from "react";
import { mockPokemonsData } from "../mock/pokeData";

const PokemonImg = ({ poke }) => {
  //we store the image on the state
  const [current, setCurrent] = React.useState(poke.sprites.front_default);
  //callbacks that will be used on events
  const onHover = () => setCurrent(poke.sprites.front_shiny);
  const onHoverLeave = () => setCurrent(poke.sprites.front_default);

  //we use the state in here
  return (
    <img
      src={current}
      onMouseEnter={onHover}
      onMouseLeave={onHoverLeave}
      alt={poke.name}
    />
  );
};
export default function PokeCard() {
  return (
    <div>
      {mockPokemonsData.map((poke) => (
        <div>
          <h1> {poke.name} </h1>
          {poke.sprites.front_default && (
            <PokemonImg key={poke.name} poke={poke} />
          )}
          {poke.sprites.back_default && (
            <img src={poke.sprites.back_default} alt="pic" />
          )}
        </div>
      ))}
    </div>
  );
}
