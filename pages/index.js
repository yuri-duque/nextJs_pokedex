import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokedex/2/").then((resp) => {
            debugger
            setPokemons(resp.data.pokemon_entries);
        }).catch(() => {

        })
    }, []);

    return (
        <div>
            Pokédex - Dev
            <ul>
                {pokemons.map((pokemon) => {
                    return (
                        <li key={pokemon.entry_number}>
                            {pokemon.pokemon_species.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}