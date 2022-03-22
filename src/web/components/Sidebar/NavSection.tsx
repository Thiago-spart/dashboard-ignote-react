import { Box, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface SideBarProps {
	title: string;
	children: ReactNode;
}

export const NavSection: React.FC<SideBarProps> = ({ title, children }) => {
	return (
		<Box>
			<Text
				fontWeight="bold"
				color="gray.400"
				fontSize="small"
				textTransform="uppercase"
			>
				{title}
			</Text>
			<Stack spacing="4" mt="8" align="stretch">
				{children}
			</Stack>
		</Box>
	);
};
