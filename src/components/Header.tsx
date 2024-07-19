import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1>Next Blog</h1>
      </Link>
      <nav>
        <Link href="/">
          <h1>home</h1>
        </Link>
        <Link href="/about">
          <h1>about</h1>
        </Link>
        <Link href="/posts">
          <h1>posts</h1>
        </Link>
        <Link href="/contact">
          <h1>contact</h1>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
