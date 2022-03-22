import { Stack } from "@chakra-ui/react";
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SidebarNav: React.FC = () => {
	return (
		<Stack spacing="12" align="flex-start">
			<NavSection title="General">
				<NavLink icon={RiDashboardLine} title="Dashboard" href="/dashboard" />
				<NavLink icon={RiContactsLine} title="Users" href="/users" />
			</NavSection>

			<NavSection title="Automation">
				<NavLink icon={RiInputMethodLine} title="Forms" href="/forms" />
				<NavLink icon={RiGitMergeLine} title="Automation" href="/automation" />
			</NavSection>
		</Stack>
	);
};
