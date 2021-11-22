import Container from '../components/container'
import Restaurants from '../components/restaurants'
import Layout from '../components/layout'
import Logo from '../components/logo'
import Meta from '../components/meta'
import Link from 'next/link'
import { getFail } from '../lib/api'

export default function Fail({ allPosts: { edges } }) {
  const restaurants = edges

  return (
    <>
      <Layout>
        <Meta title={'The Top Ten - Eat This Beef, brah.'} />
        <Logo />
        <h1 className={'wow fadeInDown'}>Fail</h1>
        <h3 className={'wow fadeInDown'}>The list disappoints. These are the burgers to avoid. You don&apos;t want to waste cash and calories here. Take our word for it and hit a place on the <Link href="/top-ten"><a>top ten</a></Link> instead. Or don&apos;t, do whatever the fuck you want. Maybe they changed chefs or something right?</h3>
        <Container>
          {restaurants.length > 0 && <Restaurants posts={restaurants} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getFail(preview)
  return {
    props: { allPosts, preview },
  }
}
