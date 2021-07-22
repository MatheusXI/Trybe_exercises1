import React, { Component } from 'react'
import pokemons from '../data'
import {Pokemon} from './Pokemon'

class Pokedex extends Component {
    render() {
        return (
        <div>
            {pokemons.map((pokemon) => <Pokemon pokemonInfo = {pokemon}/>)}
        </div> 
        )    
        }
}

export {Pokedex}