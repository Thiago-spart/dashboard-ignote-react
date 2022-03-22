import { Text } from "@chakra-ui/react";

import { NextLink } from "../NextLink";

export const Logo = () => {
	return (
		<NextLink href="/dashboard">
			<Text
				fontSize={["2xl", "3xl"]}
				fontWeight="bold"
				letterSpacing="tight"
				transition="0.4s"
				w="64"
				_hover={{
					filter: "brightness(0.8)",
				}}
			>
				dashgo
				<Text as="span" ml="1" color="pink.500">
					.
				</Text>
			</Text>
		</NextLink>
	);
};
