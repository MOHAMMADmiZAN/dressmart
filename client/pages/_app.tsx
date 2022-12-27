import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StoreProvider, useStoreRehydrated } from "easy-peasy";
import store from "../store/store";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../components/Molecules/Theme/Theme.style';
import { ThemeProvider } from '@mui/material';


const queryClient = new QueryClient()


function WaitForStateRehydration({ children }: any) {
    const isRehydrated = useStoreRehydrated()
    return isRehydrated ? children : null
}

export default function App({ Component, pageProps }: AppProps) {

    return (
        <ThemeProvider theme={theme}>
            <StoreProvider store={store}>
                <WaitForStateRehydration>
                    <QueryClientProvider client={queryClient}>
                        <Hydrate state={pageProps.dehydratedState}>
                            <CssBaseline />
                            <Component {...pageProps} />
                        </Hydrate>
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </WaitForStateRehydration>
            </StoreProvider>
        </ThemeProvider>
    )


}
