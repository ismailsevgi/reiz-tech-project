import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../Features/store';
export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark');
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
