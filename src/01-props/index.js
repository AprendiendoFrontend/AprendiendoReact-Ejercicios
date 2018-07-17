import React, { Fragment } from "react";
import Navigation from "../00-interface/Nav";
import { PokemonsList } from "./PokemonsList";
import data from "./data/pokemons.json";
import "./index.css";

const Ex01 = props => {
  console.log("MATCH", props);
  return (
    <Fragment>
      <Navigation {...props} />
      <PokemonsList pokemons={data} />
    </Fragment>
  );
};

export default Ex01;
