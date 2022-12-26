import { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { wrapper } from 'store';

import ErrorBoundary from '@/components/ErrorBoundary';

import '@/styles/global.css';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
