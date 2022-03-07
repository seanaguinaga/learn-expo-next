import { theme } from '@learn/theme';
import { DripsyProvider } from 'dripsy';
import type { AppProps } from 'next/app';
import 'raf/polyfill';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <DripsyProvider theme={theme} ssr>
      <Component {...pageProps} />
    </DripsyProvider>
  );
};

export default App;
