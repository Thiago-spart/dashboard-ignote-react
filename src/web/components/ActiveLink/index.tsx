/* eslint-disable sonarjs/no-identical-expressions */
import type { LinkProps } from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";

import type { ReactElement } from "react";
import { cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
	children: ReactElement;
	shouldMatchExactHref?: boolean;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
	children,
	shouldMatchExactHref = false,
	...rest
}) => {
	const { asPath } = useRouter();

	const isActive =
		(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) ||
		(!shouldMatchExactHref &&
			(asPath.startsWith(String(rest.href)) ||
				asPath.startsWith(String(rest.href))));

	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: isActive ? "pink.400" : "gray.50",
			})}
		</Link>
	);
};
