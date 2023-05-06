import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-wrap items-center justify-center p-6 col-span-2">
      <ul className="flex justify-end items-center list-none">
        <li className="mr-3">
          <Link className={`hover:text-gray-400 hover:font-semibold ${router.pathname === '/' ? 'text-cyan-700 font-semibold' : ''}`} href="/">Home</Link>
        </li>
        <li className="mr-3">
          <Link className={`hover:text-gray-400 hover:font-semibold ${router.pathname === '/about' ? 'text-cyan-700 font-semibold' : ''}`} href="/about">About</Link>
        </li>
        <li className="mr-3">
          <Link className={`hover:text-gray-400 hover:font-semibold ${router.pathname === '/projects' ? 'text-cyan-700 font-semibold' : ''}`} href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};







{/* <li className="mr-3">
    <Link className="hover:text-gray-400 hover:font-semibold" href="/thesis">Thesis</Link>
</li> */}
