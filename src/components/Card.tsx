import styled from "styled-components";
import { Pokemon } from "../interfaces/Pokemons";
import { typeData } from "../constants/TypeData";
import Pokeball from "../assets/Pokeball.svg";

export const Card = ({ pokemon }: { pokemon: Pokemon }) => {
    return (
        <CardContent color={typeData[pokemon.types[0].type.name].color}>
            <img className="pokeball-logo" src={Pokeball} />
            <img className="image-pokemon" src={pokemon.sprites.front_default} />
            <div className="Status">
                <p>#{String(pokemon.id).padStart(3, '0')}</p>
                <p className="pokemon-name">{pokemon.name}</p>
            </div>
            <div className="icons-types">
                {pokemon.types.map((dataType) => (
                    <IconType color={typeData[dataType.type.name].color} key={dataType.type.name}>
                        <img
                            src={typeData[dataType.type.name].icon}
                            alt={dataType.type.name}
                        />
                    </IconType>
                ))}
            </div>
        </CardContent>
    );
}

const CardContent = styled.div`
    width: 294px;
    height: 344px;
    background-color: ${props => `${props.color}`};
    box-shadow: 4px 4px 3px 2px #1a020253;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: start; 
    text-align: center;
    overflow: hidden;

    .image-pokemon {
        width: 200px;
        margin: 30px 0;
        position: relative; 
        -webkit-filter: drop-shadow(5px 5px 5px #222222);
        filter: drop-shadow(5px 5px 5px #222222);
        z-index: 2; 
    }

    .Status {
        position: absolute;
        background-color: #bbb9b9;
        width: 100%;
        height: 120px;
        font-weight: 600;
        text-align: left;
        bottom: 0;
        border-radius: 0 0 10px 10px;
        padding: 20px; 
        z-index:2;
    }

    p:first-letter {
        text-transform: uppercase;
    }
    
    .pokemon-name {
        font-size: 1.2rem;
    }

    .icons-types {
        position: absolute;
        display: flex;
        gap: 10px;
        bottom: 10px;
        z-index:3;
        img {
            width: 20px;
        }
    }

    .pokeball-logo {
        position: absolute;
        height: 250px;
        left: 100px;
        opacity: 0.2;
        z-index: 1; 
    }
`;

const IconType = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px ${(props) => `${props.color}99`};
`;
