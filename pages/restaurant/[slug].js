import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import Logo from '../../components/logo'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import Restaurant from '../../components/restaurant'

export default function Post({ post, posts }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>
                {post.title}
              </title>
              <meta
                property="og:image"
                content={post.featuredImage?.node?.sourceUrl}
              />
            </Head>
            <Logo />
            <section className={'restaurant-list'}>
              <Restaurant
                addresscity={post.addresscity}
                addressstate={post.addressstate}
                addressstreet={post.addressstreet}
                closed={post.closed}
                content={post.content}
                date={post.date}
                id={post.id}
                img={post.img}
                imgbonus={post.imgbonus}
                imgexterior={post.imgexterior}
                imgthumb={post.imgthumb}
                key={post.id}
                rank={post.rank}
                section={post.section}
                slug={post.slug}
                title={post.title}
              />
            </section>
            {morePosts.length > 0 &&<MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/restaurant/${node.slug}`) || [],
    fallback: true,
  }
}
