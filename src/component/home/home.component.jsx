import React, { useEffect, useState } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const Home = () => {
  //   const [pokemonList, setPokemonList] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    console.log();
  }, []);

  return (
    <div>
      {pokemonInfo.map((pokemon, key) => {
        return (
          <div
            key={key}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ padding: "10px" }}>
              <h1>
                {key + 1} {pokemon.name}
              </h1>
            </div>{" "}
            <div style={{ padding: "10px" }}>
              <img src={`${pokemon.sprites.other.dream_world.front_default}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
