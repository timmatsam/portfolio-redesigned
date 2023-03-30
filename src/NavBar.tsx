import * as React from 'react';
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (<nav className="flex flex-wrap items-center justify-center p-6 col-span-2">
        <ul className="flex justify-end items-center list-none">
            <li className="mr-3">
                <Link className="  hover:text-gray-400 hover:font-semibold" to="/">Home</Link>
            </li>
            <li className="mr-3">
                <Link className="  hover:text-gray-400 hover:font-semibold" to="/about">About</Link>
            </li>
            <li className="mr-3">
                <Link className="  hover:text-gray-400 hover:font-semibold" to="/projects">Projects</Link>
            </li>
            <li className="mr-3">
                <Link className="  hover:text-gray-400 hover:font-semibold" to="/thesis">Thesis</Link>
            </li>
            <li className="mr-3">
                <Link className="  hover:text-gray-400 hover:font-semibold" to="/solar-system">Anti Solar System</Link>
            </li>
        </ul>
    </nav>);
}
