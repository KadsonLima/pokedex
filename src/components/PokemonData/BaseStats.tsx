import { Flex, Text } from "@chakra-ui/react";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { PokemonData } from "../../../interfaces/PokemonData";
import { About } from "./About";

const stats = ["hp", "atk", "def", "satk", "sdef", "spd"];

export const BaseStats = ({
  color,
  pokemonData,
}: {
  color: string;
  pokemonData: PokemonData;
}) => {
  return (
    <Flex width="100%" maxWidth={"700px"} flexDirection={"column"} rowGap={5} >
      <About color={color} pokemonData={pokemonData} />
      <Text textAlign={"center"} fontWeight={"bold"} color={color}>
        Base Stats
      </Text>
      <Flex flexDirection={"column"}>
        {pokemonData.stats.map((stat:any, index:number) => {
          return (
            <Flex
              key={index}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Text
                width="45px"
                textAlign={"end"}
                color={color}
                fontWeight={"medium"}
              >
                {stats[index].toUpperCase()}
              </Text>
              <Text>{String(stat.base_stat).padStart(3, "0")}</Text>
              <ProgressBar color={color} currentValue={stat.base_stat} />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
