import { Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

// import { Footer } from "web/components/Footer";
import { Header } from "web/components/Header";
import { Sidebar } from "web/components/Sidebar";

interface Props {
	children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
	return (
		<Flex as="main" direction="column">
			<Header />
			<Flex w="100%" my="6" maxW="1480" px="6">
				<Sidebar />

				{children}
			</Flex>
		</Flex>
	);
};
