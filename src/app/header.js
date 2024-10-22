import Image from "next/image"
import logo from '../public/twice-logo.png';

export default function Header(){
    return (
        <header className="w-screen">
        <Image
          src={logo}
          width={978}
          height={246}
          alt="Twice logo"
        />
      </header>
    )
}