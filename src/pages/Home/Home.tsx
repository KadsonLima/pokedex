import axios from "axios";
import { useEffect, useState } from "react";
import LogoPokemon from "../../assets/logo-pokemon.png";
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { NamedAPIResource } from "../../interfaces/NamedAPIResource";
import { Pokemon } from "../../interfaces/Pokemons";
import { Container, Content, ErrorMessage, Logo } from "./styles";
import { InputComponent } from "../../components/Input";
import useSearchPokemon from "../../hooks/api/useSearchPokemon";
import { Button, Flex } from "@chakra-ui/react";

export const Home = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const { pokemon, pokemonLoading, getPokemon, pokemonError } = useSearchPokemon();

    useEffect(() => {
        getPokemon();
    }, []);

    useEffect(() => {
        const fetchPokemonsDetails = async () => {
            if (pokemon?.results) {
                try {
                    const pokemonDetails = await Promise.all(
                        pokemon.results.map((endpoint: NamedAPIResource) =>
                            axios.get(endpoint.url).then(res => res.data)
                        )
                    );
                    setPokemons(pokemonDetails);
                } catch (error) {
                    console.error("Erro ao buscar os detalhes dos Pokémons", error);
                }
            } else if (pokemon?.id) {
                setPokemons([pokemon])
            }

        };

        fetchPokemonsDetails();
    }, [pokemon]);



    return (
        <Container>
            <Logo src={LogoPokemon} alt="logo-pokemon" />
            <InputComponent getPokemon={getPokemon} />
            {pokemonLoading && <Loading />}
            {pokemonError && <ErrorMessage>Error: {pokemonError.message}</ErrorMessage>}
            <Content>

                {!pokemonLoading && !pokemonError && pokemons?.map((pokemon: Pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </Content>
            <Flex w={"100%"} justifyContent={"space-around"} justifyItems={"center"} marginBottom={8}>
                {pokemon?.previous && <Button onClick={() => getPokemon(pokemon.previous)} colorScheme="red">Voltar</Button>}
                {pokemon?.next && <Button onClick={() => getPokemon(pokemon.next)} colorScheme="green">Avançar</Button>}
            </Flex>

        </Container>
    );
};
