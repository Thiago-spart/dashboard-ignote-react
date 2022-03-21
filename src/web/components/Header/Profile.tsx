import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile: React.FC<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thiago Moraes</Text>
          <Text color="gray.300" fontSize="small">
            user000.000resu@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Thiago Moraes"
        src="https://github.com/Thiago-spart.png"
      />
    </Flex>
  );
};
