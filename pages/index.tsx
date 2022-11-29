import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Mertens | Webpage</title>
        <meta
          name='description'
          content='Web developer focus on creating with React and Nextjs'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='title-display'>
          <h1>CARLOS MERTENS</h1>
        </div>
      </main>
    </div>
  );
}
