import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from './menu';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const onMenuClicked = () => {
    console.log('click');
    setShowMenu(true);
  };

  return (
    <>
      <nav className={'nav wow slideInDown'}>
        <div className={'nav__inner center-flex'}>
          <button
            className={'hamburger hamburger--spin'}
            onClick={() => onMenuClicked}
          >
            <span className={'hamburger-box'}>
              <span className={'hamburger-inner'}></span>
            </span>
          </button>
          <Link href="/search">
            <a className={'search'}>
              <Image
                src="https://images.eatthisbeef.com/search-menu.png"
                width="35"
                height="35"
                alt="search"
              />
            </a>
          </Link>
        </div>
      </nav>
      <Menu showMenu={showMenu} />
    </>
  );
}
