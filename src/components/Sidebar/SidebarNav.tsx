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
        <NavLink icon={RiDashboardLine} title="Dashboard" />
        <NavLink icon={RiContactsLine} title="Users" />
      </NavSection>

      <NavSection title="Automation">
        <NavLink icon={RiInputMethodLine} title="Forms" />
        <NavLink icon={RiGitMergeLine} title="Automation" />
      </NavSection>
    </Stack>
  );
};
