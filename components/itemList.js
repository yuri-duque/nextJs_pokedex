import React from 'react';

export default function itemList(props) {
    const { pokemon } = props;

    if(pokemon){
        return (
            <div>
                <li>
                    {pokemon.pokemon_species.name}
                </li>
            </div>
        )
    }    
}