export default function Footer() {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} created with a belly full of burgers
        by Eat This Beef. All rights reserved.
      </div>
      <div>
        Let&apos;s talk about burgers:{' '}
        <a href="mailto:hello@eatthisbeef.com">hello@eatthisbeef.com</a>
      </div>
    </footer>
  )
}
