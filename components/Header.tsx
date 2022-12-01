import Image from 'next/image';
import Link from 'next/link';
import { Cube } from './Cube';

export const Header = () => {
  return (
    <header className='relative h-screen flex'>
      <nav className='absolute top-0 left-0 h-1/6 w-full flex items-center'>
        <Link
          className='ml-10 git-animated'
          href='https://github.com/carlosmertens'>
          <Image src='/github.png' alt='Github logo' height={55} width={55} />
        </Link>
        <Link
          className='ml-4 twit-animated'
          href='https://twitter.com/CarlosMertens1'>
          <Image src='/twitter.png' alt='Twitter logo' height={55} width={55} />
        </Link>
        <Link
          className='ml-4 in-animated'
          href='https://www.linkedin.com/in/carlosmertens/'>
          <Image
            src='/linkedin.png'
            alt='LinkedIn logo'
            height={55}
            width={55}
          />
        </Link>
      </nav>

      <div className='w-full flex justify-center items-center text-center flex-col'>
        <h1 className='banner-title text-3xl sm:text-5xl lg:text-7xl'>
          <span>Carlos mertens</span>
          <span className='hidden'>
            your exiting and creative web developer
          </span>
        </h1>
      </div>
      <div className='absolute right-5 bottom-5'>
        <Cube t1='react' t2='js' t3='css' t4='html' />
      </div>
    </header>
  );
};
