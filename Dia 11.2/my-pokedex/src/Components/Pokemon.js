import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        const {pokemonInfo} = this.props;
        return (
        <div>
            <p>Nome: {pokemonInfo.name}</p>
            <p>Tipo: {pokemonInfo.type}</p>
            <p>Peso: {pokemonInfo.averageWeight.value}{pokemonInfo.averageWeight.measurementUnit}</p>
            <img src={pokemonInfo.image} alt ={pokemonInfo.name}/>
        </div>
        )
    }
}

export {Pokemon};