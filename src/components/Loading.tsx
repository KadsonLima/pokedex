import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width="100%"
      height="100%"
    >
      <Spinner thickness="4px" speed="0.65s" color="#FFFF" size="xl" />
    </Flex>
  );
};