import type { ReactNode } from "react";

// import { Footer } from "web/components/Footer";
import { Header } from "web/components/Header";

interface Props {
	children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			{/* <Footer /> */}
		</>
	);
};
