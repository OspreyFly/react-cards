import React from "react";
import { v4 as uuid } from "uuid";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { useAxios } from "./hooks";

function PokeDex() {
  // Assuming useAxios returns an object with data, loading, error, and possibly other properties
  const { data: pokemon, loading, error, addData: addPokemon } = useAxios("https://pokeapi.co/api/v2/pokemon/", []);

  const addNewPokemon = async name => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    // Assuming addPokemon is a function to add new data to the existing data
    addPokemon({ ...response.data, id: uuid() });
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addNewPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
