import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image} = this.props;

        return (
            <div className="pokemon-container">
                <div>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                </div>
                
                <img src={image} alt="Imagem de um pokemon."/>
            </div>
        )
    }
}

export default Pokemon;
