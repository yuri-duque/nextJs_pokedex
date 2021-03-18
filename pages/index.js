import React, { useEffect, useState } from "react";
import axios from 'axios';
import ItemList from '../components/itemList'

export default function Home() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokedex/2/")
        .then((resp) => {
            setPokemons(resp.data.pokemon_entries);
        });
    });

    return (
        <div>
            Pokédex - Dev
            <ul>
                {pokemons && pokemons.map((pokemon) => {
                    return (
                        <ItemList pokemon={pokemon} key={pokemon.entry_number}/>
                    );
                })}
            </ul>
        </div>
    )
}