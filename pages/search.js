import Container from '../components/container'
import Restaurants from '../components/restaurants'
import Logo from '../components/logo'
import Layout from '../components/layout'
import Meta from '../components/meta'
import { getAllPostsForHome } from '../lib/api'

export default function Search({ allPosts: { edges } }) {
  const restaurants = edges.slice(1)

  return (
    <>
      <Layout>
        <Meta title={'Eat This Beef, brah.'} />
        <Logo />
        <Container>
          <h4>
            ... aint done yet
          </h4>
          <div>
            &nbsp;
          </div>
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
