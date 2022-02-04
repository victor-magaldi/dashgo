import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV == "development") {
    makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClientt}>
            <ChakraProvider resetCSS theme={theme}>
                <SidebarDrawerProvider>
                    <Component {...pageProps} />
                </SidebarDrawerProvider>
            </ChakraProvider>

            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default MyApp;
