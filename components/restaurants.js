import Restaurant from './restaurant'

export default function Restaurants({ posts }) {
  return (
    <section className={'restaurant-list'}>
      {posts.map(({ node }) => (
        <Restaurant
          addresscity={node.addresscity}
          addressstate={node.addressstate}
          addressstreet={node.addressstreet}
          closed={node.closed}
          content={node.content}
          date={node.date}
          id={node.id}
          img={node.img}
          imgbonus={node.imgbonus}
          imgexterior={node.imgexterior}
          imgthumb={node.imgthumb}
          key={node.id}
          rank={node.rank}
          section={node.section}
          slug={node.slug}
          title={node.title}
        />
      ))}
    </section>
  )
}
