import { useSession } from "next-auth/react";

import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "../../../context/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export const Header: React.FC = () => {
	const { onOpen } = useSidebarDrawer();

	const { data } = useSession();

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Flex
			as="header"
			w="100%"
			maxW="1480px"
			h="20"
			mx="auto"
			mt="4"
			align="center"
			px="6"
		>
			{!isWideVersion && (
				<IconButton
					aria-label="Open navigation"
					icon={<Icon as={RiMenuLine} />}
					fontSize="24"
					variant="unstyled"
					onClick={onOpen}
					mr="2"
				/>
			)}

			<Logo />

			{isWideVersion && <SearchBox />}

			<Flex align="center" ml="auto">
				<NotificationsNav />
				<Profile
					showProfileData={isWideVersion}
					email={String(data?.user?.email)}
					name={String(data?.user?.name)}
					userImg={String(data?.user?.image)}
				/>
			</Flex>
		</Flex>
	);
};
