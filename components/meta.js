import Head from 'next/head';

export default function Meta({ title, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:image"
        content={
          image ? 'https://eatthisbeef.com/' : 'https://eatthisbeef.com/'
        }
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta
        name="description"
        content="DFW's most epic burger ranking publication of all time.  Feed your life-long burger quest in Dallas, TX."
      />
      <meta
        name="keywords"
        content="burger, burgers, beef, america, dallas, dfw, texas, top ten, best of, blog, tasty, weekly, grease, best, yum, photos, local, food, reviews"
      />
      <meta name="author" content="Brian Parks" />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={
          image ? 'https://eatthisbeef.com/' : 'https://eatthisbeef.com/'
        }
      />
      <meta property="og:url" content="https://eatthisbeef.com/" />
      <meta property="og:site_name" content="Eat This Beef!" />
      <meta
        property="og:description"
        content="DFW's most epic burger ranking publication of all time.  Feed your life-long burger quest in Dallas, TX."
      />
      <link
        rel="shortcut icon"
        href="https://images.eatthisbeef.com/favicon.png"
        type="image/x-icon"
      />
    </Head>
  );
}
