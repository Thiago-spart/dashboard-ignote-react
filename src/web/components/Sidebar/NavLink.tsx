import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import type { ElementType } from "react";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	title: string;
	href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
	icon,
	title,
	href,
	...rest
}) => {
	return (
		<ActiveLink href={href} passHref>
			<ChakraLink display="flex" align="center" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">
					{title}
				</Text>
			</ChakraLink>
		</ActiveLink>
	);
};
