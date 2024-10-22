import styled from "styled-components";

export const Button = ({findPokemon}:{findPokemon:any}) => {


    return (
        <ButtonDiv onClick={findPokemon}>
            Buscar
        </ButtonDiv>
    );
}

const ButtonDiv = styled.button`
   width: 160px;
   background-color: #ffffff;
   height: 48px;
   border-radius: 10px;
   font-weight: 600;

   &:hover{
        filter: contrast(0.7);
   }
`;
