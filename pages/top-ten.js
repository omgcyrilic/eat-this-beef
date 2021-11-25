import Container from '../components/container'
import Restaurants from '../components/restaurants'
import Layout from '../components/layout'
import Logo from '../components/logo'
import Meta from '../components/meta'
import { getTopTen } from '../lib/api'
import { Emoji } from '../components/emoji'

export default function Index({ allPosts: { edges } }) {
  const restaurants = edges

  return (
    <>
      <Layout>
        <Meta title={'The Top Ten - Eat This Beef, brah.'} />
        <Logo />
        <h1 className={'wow fadeInDown'}>THE TOP TEN</h1>
        <h3 className={'wow fadeInDown'}>The best of the best in Dallas, Texas</h3>
        <h4 className={'wow fadeInDown top-ten'}><h3 style="display: inline">&#128054;</h3>😢Burger authority notation: the top ten will remain in flux due to COViD until further notice</h4>
        <Container>
          {restaurants.length > 0 && <Restaurants posts={restaurants} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getTopTen(preview)
  return {
    props: { allPosts, preview },
  }
}
