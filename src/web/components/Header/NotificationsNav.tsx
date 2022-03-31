import { signOut } from "next-auth/react";

import { Button, Flex, Icon, Tooltip } from "@chakra-ui/react";
import {
	RiLogoutCircleLine,
	RiNotificationLine,
	RiUserAddLine,
} from "react-icons/ri";

import { NextLink } from "../NextLink";

export const NotificationsNav = () => {
	return (
		<Flex
			gap={["6", "8"]}
			mx={["6", "8"]}
			pr={["6", "8"]}
			py="1"
			color="gray.300"
			borderRightWidth="1"
			borderColor="gray.700"
			align="center"
		>
			<Tooltip hasArrow label="Notifications" bg="gray.500">
				<Button variant="unstyled">
					<Icon as={RiNotificationLine} fontSize="20" />
				</Button>
			</Tooltip>

			<NextLink href="/users/create">
				<Tooltip hasArrow label="Add new user" bg="gray.500">
					<Button
						transition="0.4s"
						_hover={{ filter: "brightness(0.8)" }}
						variant="unstyled"
					>
						<Icon as={RiUserAddLine} fontSize="20" />
					</Button>
				</Tooltip>
			</NextLink>

			<Tooltip hasArrow label="Log Out" bg="gray.500">
				<Button
					transition="0.4s"
					_hover={{ filter: "brightness(0.8)" }}
					variant="unstyled"
					onClick={() => signOut()}
				>
					<Icon as={RiLogoutCircleLine} fontSize="20" />
				</Button>
			</Tooltip>
		</Flex>
	);
};
