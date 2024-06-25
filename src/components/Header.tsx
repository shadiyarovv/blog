import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Header = async () => {
  const user = await getCurrentUser();

  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto text-white">
        <Link href="/" className="text-2xl font-bold">
          Blogs
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            {user?.name ? (
              <LogoutButton />
            ) : (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
