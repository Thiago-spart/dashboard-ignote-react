import LinkNext from "next/link";

import { Link } from "@chakra-ui/react";

import type { LinkProps } from "types/interfaces/link";

export const NextLink: FC<LinkProps> = ({
	href,
	blank,
	disabled,
	children,
	...props
}) => (
	<LinkNext href={href} passHref>
		<Link
			as="a"
			style={{ pointerEvents: disabled ? "none" : "auto" }}
			target={blank ? "_blank" : "_self"}
			rel="noopener noreferrer"
			{...props}
		>
			{children}
		</Link>
	</LinkNext>
);
