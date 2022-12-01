import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Zen_Dots } from '@next/font/google';

const zen = Zen_Dots({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={zen.className}>
      <Component {...pageProps} />
    </div>
  );
}
