import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData?: boolean;
	name?: string;
	email?: string;
	userImg?: string;
}

export const Profile: React.FC<ProfileProps> = ({
	showProfileData = true,
	email,
	name,
	userImg,
}) => {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>{name}</Text>
					<Text color="gray.300" fontSize="small">
						{email}
					</Text>
				</Box>
			)}
			<Avatar size="md" name={name} src={userImg} />
		</Flex>
	);
};
