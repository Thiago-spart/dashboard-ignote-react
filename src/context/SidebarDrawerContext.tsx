/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";

import type { UseDisclosureReturn } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
	children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export const SidebarDrawerProvider = ({
	children,
}: SidebarDrawerProviderProps) => {
	const disclosure = useDisclosure();
	const router = useRouter();

	useEffect(() => {
		disclosure.onClose();
	}, [router.asPath]);

	return (
		<SidebarDrawerContext.Provider value={disclosure}>
			{children}
		</SidebarDrawerContext.Provider>
	);
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
