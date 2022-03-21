import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const NoneLayout: FC<Props> = ({ children }) => <>{children}</>;
