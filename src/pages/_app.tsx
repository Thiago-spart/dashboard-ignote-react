import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { SidebarDrawerProvider } from "../context/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
