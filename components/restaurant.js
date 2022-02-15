import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import Image from 'next/image';
import Lightbox from '../components/lightbox';
import { getCategoryTag, getDateDisplay } from './helpers';

export default function Restaurant({
  addresscity,
  addressstate,
  addressstreet,
  closed,
  content,
  date,
  id,
  img,
  imgbonus,
  imgexterior,
  imgthumb,
  rank,
  section,
  slug,
  restaurant,
  title,
}) {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <Lightbox
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        img={img}
        imgbonus={imgbonus}
        imgexterior={imgexterior}
        restaurant={restaurant}
      />
      <section
        key={id}
        className={`restaurant wow fadeInUp ${closed ? 'closed' : ''}`}
        data-wow-duration=".5s"
        data-wow-offset="10"
      >
        <LazyLoad height={50}>
          <div className="tag">
            <Image
              src={`https://images.eatthisbeef.com/tags/${getCategoryTag(
                section,
                rank
              )}.png`}
              width="50"
              height="50"
              alt="burger tag"
            />
          </div>
        </LazyLoad>
        <Link href={`/restaurant/${slug}`}>
          <a>
            <h2>{title}</h2>
          </a>
        </Link>
        <div className={'address'}>
          <a
            href={`https://www.google.com/maps/place/${addressstreet} ${addresscity} ${addressstate}`}
            target="_blank"
            rel="noreferrer"
          >{`${addressstreet} ${addresscity}, ${addressstate}`}</a>
        </div>
        <button className={'img-thumb'} onClick={() => setIsOpen(true)}>
          <LazyLoad height={50}>
            <div className="zoom"></div>
          </LazyLoad>
          <LazyLoad height={100}>
            <div className="img">
              <Image
                src={`https://images.eatthisbeef.com/${imgthumb}`}
                width="100"
                height="100"
                alt="burger thumbnail"
              />
            </div>
          </LazyLoad>
        </button>
        <div className={'copy'}>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div className={'date'}>Masticated in: {getDateDisplay(date)}</div>
      </section>
    </>
  );
}
