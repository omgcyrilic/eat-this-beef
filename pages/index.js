import Container from '../components/container'
import Restaurants from '../components/restaurants'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Logo from '../components/logo'
import Meta from '../components/meta'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts: { edges } }) {
  const restaurants = edges.slice(1)

  return (
    <>
      <Layout>
        <Meta title={'Eat This Beef, brah.'} />
        <Logo />
        <Intro />
        <Container>
          {restaurants.length > 0 && <Restaurants posts={restaurants} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
