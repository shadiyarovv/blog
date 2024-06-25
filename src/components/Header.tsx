import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto text-white">
        <Link href="/" className="text-2xl font-bold">
          Blogs
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/api/auth/signin">Login</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
