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
        <h1 className={'wow fadeInDown'}>Destination</h1>
        <h3 className={'wow fadeInDown'}>The list broadens. Who doesn&apos;t love a good burger when you&apos;re on vacation? These are the burger joints outside of DFW worth checking out if you&apos;re in the area.</h3>
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
