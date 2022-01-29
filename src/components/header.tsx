import { Flex, Text, Input, Icon, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW="1480px"
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW="400"
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="search on the platform"
          _placeholder={{
            color: "gray.400",
          }}
          px="4"
          mr="4"
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <Flex
          gap="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth="1"
          borderColor="gray.700"
          align="center"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </Flex>
      </Flex>
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
    </Flex>
  );
};
