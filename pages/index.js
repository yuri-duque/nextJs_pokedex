import React from 'react';
import axios from 'axios';

export async function getStaticProps() {
    debugger;
    const pokemons = await axios.get("https://pokeapi.co/api/v2/pokedex/2/")
        .then((resp) => {
            return resp.data.pokemon_entries;
        });
    debugger;
    return {
        props: {
            pokemons
        }
    }
}

export default function Home(props) {
    const { pokemons } = props;
    debugger;

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