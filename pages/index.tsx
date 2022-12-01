import Head from 'next/head';
import { Header } from '../components/Header';
import { Cube } from '../components/Cube';

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

      <section className='h-screen flex justify-center items-center'>
        <Cube t1='next' t2='node' t3='warp' t4='iTerm' />
      </section>
    </div>
  );
}
