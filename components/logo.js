import Image from 'next/image';

export default function Intro() {
  return (
    <section>
      <div className={'logo wow fadeInDown'}>
        <Image
          src={'https://images.eatthisbeef.com/logo.png'}
          width="3649"
          height="558"
          alt="logo"
        />
      </div>
      <div className={'logo stacked wow fadeInDown'}>
        <Image
          src={'https://images.eatthisbeef.com/logo-stacked.png'}
          width="744"
          height="652"
          alt="logo"
        />
      </div>
    </section>
  );
}
