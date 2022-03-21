import type { AnchorHTMLAttributes } from "react";

type LinkAttributes = AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkOmitted = Omit<LinkAttributes, "style" | "target">;

export interface LinkProps extends LinkOmitted {
	href: string;
	blank?: boolean;
	disabled?: boolean;
}
