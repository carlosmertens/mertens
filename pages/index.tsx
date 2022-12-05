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
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png'></link>
      </Head>

      <Header />

      <section className='section-two'>
        <Cube text1='yarn' text2='node' text3='warp' text4='iTerm' />
      </section>
    </div>
  );
}
