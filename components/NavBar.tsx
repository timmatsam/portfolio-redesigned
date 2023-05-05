import Link from 'next/link';
export const NavBar = () => {
    return (<nav className="flex flex-wrap items-center justify-center p-6 col-span-2">
        <ul className="flex justify-end items-center list-none">
            <li className="mr-3">
                <Link className="hover:text-gray-400 hover:font-semibold" href="/">Home</Link>
            </li>
            <li className="mr-3">
                <Link className="hover:text-gray-400 hover:font-semibold" href="/about">About</Link>
            </li>
            <li className="mr-3">
                <Link className="hover:text-gray-400 hover:font-semibold" href="/projects">Projects</Link>
            </li>
            {/* <li className="mr-3">
                <Link className="hover:text-gray-400 hover:font-semibold" href="/thesis">Thesis</Link>
            </li> */}
        </ul>
    </nav>);
}
