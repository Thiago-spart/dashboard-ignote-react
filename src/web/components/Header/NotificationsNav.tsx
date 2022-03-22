import { Flex, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

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
			<Icon as={RiNotificationLine} fontSize="20" />

			<NextLink href="/users/create">
				<Icon
					as={RiUserAddLine}
					transition="0.4s"
					fontSize="20"
					_hover={{ filter: "brightness(0.8)" }}
				/>
			</NextLink>
		</Flex>
	);
};
