import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useDeclaredHooks from '../DeclaredHooks/useDeclaredHooks';
import styles from './Footer.module.scss';
function Footer() {
  const { theme } = useDeclaredHooks();
  return (
    <div
      id='footerWrapper'
      className={`h-24 w-full px-8 grid place-content-center ${
        theme === 'dark'
          ? 'animate-[toDark_1s_ease_1] '
          : 'animate-[toLight_1s_ease_1]'
      }`}
    >
      <div className='w-max flex justify-center items-center gap-4'>
        <Link
          href='https://github.com/ismailsevgi/reiz-tech-project'
          target='_blank'
        >
          <Image
            src={'/logo/github1.svg'}
            alt='github logo'
            width={50}
            height={50}
            className={
              theme === 'light' ? styles.ImageClass1 : styles.ImageClass2
            }
          />
        </Link>
        <Link
          href='https://github.com/ismailsevgi/reiz-tech-project'
          className={`text-3xl ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}
          target='_blank'
        >
          ISMAIL SEVGI
        </Link>
      </div>
    </div>
  );
}

export default Footer;
