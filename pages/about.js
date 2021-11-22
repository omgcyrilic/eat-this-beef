import Container from '../components/container'
import Logo from '../components/logo'
import Layout from '../components/layout'
import Meta from '../components/meta'
import Link from 'next/link'
import { getAllPostsForHome } from '../lib/api'

export default function About({ allPosts: { edges } }) {
  const restaurants = edges.slice(1)

  return (
    <>
      <Layout>
        <Meta title={'Eat This Beef, brah.'} />
        <Logo />
        <Container>
          <div className={'intro about'}>
            <h1 className={'wow fadeInDown'}>About</h1>
            <div className={'wow bounce'}>
              <p>Hello there. Top of the website to you.</p>
              <p>Eat this beef has been searching for the best burgers in Dallas Texas for eight years. We check out new places almost every week so drop in again as the top ten is ever-evolving. ETB is burger centric in that we&apos;re not concerned with price, atmosphere, or service. It&apos;s all about the burger. We will however comment on the aforementioned if the restaurant delivers above and beyond. We prefer a &quot;best of the best&quot; short list as opposed to a lengthy list of options coupled with a complicated ranking system.</p>
              <p>Established in 2010, eat this beef has cataloged <span>??</span> burgers in the DFW area to date. Fight us.</p>
              <p>My name is <Link href="https://www.linkedin.com/in/brian-parks-45886855/"><a target="_blank">top ten</a></Link> and I love to eat burgers, and I also love to write software. With our powers combined we get a website. This is version three of eat this beef and it&apos;s been built from the ground up. It&apos;s utilizing the newest steamy hotness including but not limited to: the Wordpress REST API, react, next.js, express, SASS, et al. It renders on the server and client side, such neat! Much SEO. You can check out the <Link href="https://github.com/omgcyrilic/eat-this-beef"><a target="_blank">source code</a></Link> if you&apos;re feelin&apos; saucy.</p>
              <p>And now, a message about burgers:</p>
              <p>&quot;BURGER. The mere mention of the word elicits a Pavlovian salivation from men and women the world over. An easily uttered two syllables used to define a food both beautiful in its pure minimalist pragmatism and fascinating in its immeasurable permutations.</p>
              <p>Bun + Patty + Various Adornments + Bun = Burger.</p>
              <p>An equation as simple but profound as E = MC2. But could it possibly be this simple? Is one bun not a crown, a piece of regal headwear meant to exalt man&apos;s greatest achievement? And is the other bun not a foundation, bearing not merely meat, but carrying all the worldly burdens of Atlas himself? And is not all that lies between these starchy sentinels a testament to humanity&apos;s ever evolving ingenuity?</p>
              <p>These are questions that burdened mankind for time immemorial. Truly, mankind and the burger have been inexorably linked for as long as civilization itself. Studies of the fossil record show early hominids developed tools and fire in attempts at an early &quot;proto-burger.&quot; Archaeology shows that early man descended from the African highlands to the fertile crescent of Mesopotamia, solely to domesticate the grains and beasts for the world&apos;s first true burger. Humans would soon populate every corner of the earth, following large game over the Bering land bridge in a quest for the exotic burgers of the American continents. It is reported Aristotle once scoffed, &quot;Ye gods can keep ye nectar and ye ambrosia, for Man has the Burger!&quot;</p>
              <p>For centuries the burger remained the defining force in history. Columbus set sail towards the western horizon, having heard rumors of a new world rich in gold, silver, and delicious burgers. Indeed, the very first conquistadors left behind ship loads of cattle on the wide Texas plains, in hopes that future voyages would return to a land of sufficient burger resources. Henry Ford developed the assembly line to create the world&apos;s most efficient burger, only to later realize the process could also be used in the manufacture of cars. And at man&apos;s zenith, he would walk on the moon, just to see if any delicious burgers lied beyond earth&apos;s surface.</p>
              <p>And so the quest for the perfect burger continues here at Eat This Beef! We will scour the four corners of the earth, leaving no bun unturned. For as there are countless scholars studying the artistry of the Mona Lisa, the rich symbolism of Moby Dick, and the engineering prowess of the Coliseum, Eat This Beef shall be the definitive scholars of the artistry, richness, and engineering might of The Burger. We invite you to join us bite by bite as every burger shall be studied, savored, celebrated, and saluted.&quot;</p>
              <p>-- <Link href="https://www.facebook.com/anthony.schmeck"><a target="_blank">Anthony Schmeck</a></Link></p>
            </div>
          </div>
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
