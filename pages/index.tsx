import Head from 'next/head';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Mertens | Exiting and creative web developer</title>
        <meta
          name='description'
          content='Web developer focus on creating with React and Nextjs'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />
    </div>
  );
}
