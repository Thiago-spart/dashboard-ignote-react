import LinkNext from "next/link";

import type { LinkProps } from "types/interfaces/link";

export const NextLink: FC<LinkProps> = ({
	href,
	blank,
	disabled,
	children,
	...props
}) => (
	<LinkNext href={href}>
		<a
			style={{ pointerEvents: disabled ? "none" : "auto" }}
			target={blank ? "_blank" : "_self"}
			rel="noopener noreferrer"
			{...props}
		>
			{children}
		</a>
	</LinkNext>
);
