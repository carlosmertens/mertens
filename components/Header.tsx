import Image from 'next/image';
import Link from 'next/link';
import { Cube } from './Cube';

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav-container'>
        <Link
          className='nav-logo-link git-animated'
          href='https://github.com/carlosmertens'>
          <Image src='/github.png' alt='Github logo' height={55} width={55} />
        </Link>
        <Link
          className='nav-logo-link twit-animated'
          href='https://twitter.com/CarlosMertens1'>
          <Image src='/twitter.png' alt='Twitter logo' height={55} width={55} />
        </Link>
        <Link
          className='nav-logo-link in-animated'
          href='https://www.linkedin.com/in/carlosmertens/'>
          <Image
            src='/linkedin.png'
            alt='LinkedIn logo'
            height={55}
            width={55}
          />
        </Link>
      </nav>

      <div className='banner-container'>
        <h1 className='banner-title'>
          <span>Carlos mertens</span>
          <span className='banner-hidden'>
            your exiting and creative web developer
          </span>
        </h1>
      </div>

      <div className='footer-cube'>
        <Cube text1='html' text2='css' text3='sass' text4='js' />
      </div>
    </header>
  );
};
