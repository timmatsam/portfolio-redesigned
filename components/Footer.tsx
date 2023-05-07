import Image from "next/image"
import github from "../public/github.png"
import linkedin from "../public/linkedin.png"
import Link from "next/link"
export const Footer = () => {
    return (
        <footer className="flex flex-row justify-evenly w-full mb-6">
            <Link href="https://github.com/timmatsam">
                <Image src={github} alt="github" width={30} className="hover:opacity-50"/>
            </Link>
            <Link href="https://www.linkedin.com/in/tim-mathew-samuel/">
                <Image src={linkedin} alt="linkedin" width={30} className="hover:opacity-50"/>
            </Link>
            <p>timmatsam@gmail.com</p>
        </footer>
    )
}