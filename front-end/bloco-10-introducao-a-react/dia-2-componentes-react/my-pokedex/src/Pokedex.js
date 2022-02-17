import Pokemon from './Pokemon';
import React, { Component } from 'react';
import pokemons from './data';

class Pokedex extends  Component {
    
    render() {
        return (
            pokemons.map((pokemon, index) =>
                
                    <Pokemon 
                    name={pokemon.name} 
                    type={pokemon.type} 
                    averageWeight={pokemon.averageWeight}
                    image={pokemon.image}/>
            )
        )
    }
}

export default Pokedex;