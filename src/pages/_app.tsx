import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import type { AppProps } from 'next/app'

import '@/styles/globals.scss'
import { store, persistor } from '@/rtk/store'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
