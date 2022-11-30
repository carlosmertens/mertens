import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav-container'>
        <Link
          className='nav-logo-link git-animated'
          href='https://github.com/carlosmertens'>
          <Image
            className='nav-logo'
            src='/github.png'
            alt='Home logo'
            height={55}
            width={55}
          />
        </Link>
        <Link
          className='nav-logo-link twit-animated'
          href='https://twitter.com/CarlosMertens1'>
          <Image
            className='nav-logo'
            src='/twitter.png'
            alt='Home logo'
            height={55}
            width={55}
          />
        </Link>
        <Link
          className='nav-logo-link in-animated'
          href='https://www.linkedin.com/in/carlosmertens/'>
          <Image
            className='nav-logo'
            src='/linkedin.png'
            alt='Home logo'
            height={55}
            width={55}
          />
        </Link>
      </nav>

      <div className='banner-container'>
        <h1 className='banner-title'>
          <span>carlos mertens</span>
          <span className='banner-title-sub'>
            your exiting and creative web developer
          </span>
        </h1>
      </div>
    </header>
  );
};
