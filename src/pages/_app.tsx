import { initializeStore } from '@/redux/store'
import type { AppProps } from 'next/app'
import { useMemo } from 'react';
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {

  const store = useMemo(() => {
    return initializeStore(pageProps.internal?.initialReduxState);
  }, [pageProps.internal?.initialReduxState]);
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
