import Image from 'next/image';
import Link from 'next/link';
import { Cube } from './Cube';

export const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav-container'>
        <Link
          className='header__nav-logo-link git-animated'
          href='https://github.com/carlosmertens'>
          <Image src='/github.png' alt='Github logo' height={45} width={45} />
        </Link>
        <Link
          className='header__nav-logo-link twit-animated'
          href='https://twitter.com/CarlosMertens1'>
          <Image src='/twitter.png' alt='Twitter logo' height={45} width={45} />
        </Link>
        <Link
          className='header__nav-logo-link in-animated'
          href='https://www.linkedin.com/in/carlosmertens/'>
          <Image
            src='/linkedin.png'
            alt='LinkedIn logo'
            height={45}
            width={45}
          />
        </Link>
      </nav>

      <div className='banner-container'>
        <h1 className='banner--title-main'>
          Carlos mertens
          <span className='text-hidden'>
            your exiting and creative web developer
          </span>
        </h1>
        <div className='banner--title-sub'>web developer</div>
      </div>

      <div className='footer-cube'>
        <Cube text1='html' text2='css' text3='sass' text4='tailwind' />
        <Cube text1='js' text2='ts' text3='react' text4='next' color='red' />
      </div>
    </header>
  );
};
