import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { LayoutWrapper } from "web/layouts/wrapper";

import { SidebarDrawerProvider } from "../../../context/SidebarDrawerContext";
import { makeServer } from "../../../services/mirage";
import { queryClient } from "../../../services/queryClient";
import { theme } from "./theme";

if (process.env.NODE_ENV === "development") {
	makeServer();
}

export const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<SidebarDrawerProvider>
					<LayoutWrapper>
						<Component {...pageProps} />
					</LayoutWrapper>
				</SidebarDrawerProvider>
			</ChakraProvider>

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};
