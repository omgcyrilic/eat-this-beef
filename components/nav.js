import Link from 'next/link'
import Image from 'next/image'

export default function Menu() {
  return (
    <nav className={'nav wow slideInDown'}>
      <div className={'nav__inner center-flex'}>
        <button className={'hamburger hamburger--spin'}>
          <span className={'hamburger-box'}>
            <span className={'hamburger-inner'}></span>
          </span>
        </button>
        <Link href="/search"><a className={'search'}><Image src="https://images.eatthisbeef.com/search-menu.png" width="35" height="35" alt="search" /></a></Link>
      </div>
    </nav>
  )
}
