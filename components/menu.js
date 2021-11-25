import React, {useState} from 'react'
import Link from 'next/link'

export default function Menu(showMenu) {
  const onMenuClicked = () => {
    console.log('click')
  }

  return (
    <aside>
      <div className={`menu ${showMenu ? 'expanded' : ''}`}>
        <Link href="/"><a className={'menu__item'} onClick={onMenuClicked}>Home</a></Link>
        <Link href="/top-ten"><a className={'menu__item'}>Top Ten</a></Link>
        <Link href="/honorable-mention"><a className={'menu__item'}>Honorable Mention</a></Link>
        <Link href="/fail"><a className={'menu__item'}>Fail</a></Link>
        <Link href="/destination"><a className={'menu__item'}>Destination</a></Link>
        <Link href="/search"><a className={'menu__item'}>Search</a></Link>
        <Link href="/about"><a className={'menu__item'}>About</a></Link>
      </div>
    </aside>
  )
}
