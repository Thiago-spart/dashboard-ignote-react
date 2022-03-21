import type { ReactNode } from "react";

import { LayoutsEnum } from "types/enums/layouts";

import type { Layout } from "types/interfaces/layout";

import { DefaultLayout } from "./default";
import { NoneLayout } from "./none";

interface Props {
	children: ReactNode & { type: Layout };
}

interface PropsWithChildren {
	children: ReactNode;
}

const getLayout = (layout?: LayoutsEnum): FC<PropsWithChildren> => {
	switch (layout) {
		case LayoutsEnum.NONE:
			return NoneLayout;
		case LayoutsEnum.DEFAULT:
		default:
			return DefaultLayout;
	}
};

export const LayoutWrapper: FC<Props> = ({ children }) => {
	const LayoutComponent = getLayout(children.type.layout);

	return <LayoutComponent>{children}</LayoutComponent>;
};
