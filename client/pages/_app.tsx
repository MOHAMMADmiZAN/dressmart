import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useStoreRehydrated,StoreProvider} from "easy-peasy";
import store from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  function WaitForStateRehydration ({children}) {
    const isRehydrated = useStoreRehydrated()
    return isRehydrated ? children : null
  }

  return(
      <StoreProvider store={store}>
        <WaitForStateRehydration>
          <Component {...pageProps} />
        </WaitForStateRehydration>
      </StoreProvider>
  )


}
