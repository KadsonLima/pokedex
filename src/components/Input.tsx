import { Box, Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, Tooltip } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react';
import { useState } from "react";
import { Button } from "./Button";
export const InputComponent = ({ getPokemon }: { getPokemon: Function }) => {
  const [limit, setLimit] = useState(10);
  const [inputPokemonName, setNamePokemon] = useState('');

  function findPokemon() {
    getPokemon(inputPokemonName, limit);
  }

  return (
    <Flex pt="48" justify="center" align="flex-start" w="100%" maxW="800px" gap={3} padding={10}>
      <Box w={"100%"}>
      <Input
        variant='unstyled'
        placeholder="Pesquisar"
        backgroundColor={"white"}
        padding={3}
        value={inputPokemonName} 
        onChange={(event) => setNamePokemon(event.target.value)}
      />
      <Text mt={2} fontSize="sm" color="white">Busque por número ou nome</Text>
      </Box>
     
      <Button findPokemon={findPokemon}/>

      <Tooltip label="Quantidade de Pokémons a serem buscados" aria-label="Quantidade de Pokémons" hasArrow placement="top">
      <NumberInput
        
        step={10}
        value={limit} 
        min={10}
        max={100}
        onChange={(_, valueAsNumber) => setLimit(valueAsNumber || 10)} 
      >
        <NumberInputField backgroundColor={"white"} height={"48px"} width={"80px"}/>
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      </Tooltip>
    </Flex>
  );
};
