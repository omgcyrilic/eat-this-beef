import Container from '../components/container'
import Restaurants from '../components/restaurants'
import Layout from '../components/layout'
import Logo from '../components/logo'
import Meta from '../components/meta'
import { getHonerableMention } from '../lib/api'

export default function HonorableMention({ allPosts: { edges } }) {
  const restaurants = edges

  return (
    <>
      <Layout>
        <Meta title={'The Top Ten - Eat This Beef, brah.'} />
        <Logo />
        <h1 className={'wow fadeInDown'}>Honorable Mention</h1>
        <h3 className={'wow fadeInDown'}>The list continues. These burgers are fantastic and we&apos;d love to return for another burgering sesh, but unfortunately we couldn&apos;t squeeze them into the top ten, because you know, there are only ten slots, and there are so many burgers in the Dallas burger-sphere. We want them all to be in the top ten, but god damnit we have to show some restraint.</h3>
        <Container>
          {restaurants.length > 0 && <Restaurants posts={restaurants} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getHonerableMention(preview)
  return {
    props: { allPosts, preview },
  }
}
