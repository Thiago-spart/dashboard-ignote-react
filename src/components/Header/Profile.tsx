import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="center">
        <Text>Thiago Moraes</Text>
        <Text color="gray.300" fontSize="small">
          user000.000resu@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Thiago Moraes"
        src="https://github.com/Thiago-spart.png"
      />
    </Flex>
  );
};
