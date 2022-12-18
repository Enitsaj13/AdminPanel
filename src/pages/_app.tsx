import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import type { AppProps } from 'next/app'

import '@/styles/globals.scss'
import { store, persistor } from '@/rtk/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
