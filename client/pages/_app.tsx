import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {StoreProvider, useStoreRehydrated} from "easy-peasy";
import store from "../store/store";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider,Hydrate} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()


function WaitForStateRehydration({children}: any) {
    const isRehydrated = useStoreRehydrated()
    return isRehydrated ? children : null
}

export default function App({Component, pageProps}: AppProps) {

    return (
        <StoreProvider store={store}>
            <WaitForStateRehydration>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                    </Hydrate>
                    <ReactQueryDevtools initialIsOpen={false}/>
                </QueryClientProvider>
            </WaitForStateRehydration>
        </StoreProvider>
    )


}
