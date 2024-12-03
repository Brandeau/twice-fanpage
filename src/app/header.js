import Image from "next/image"
import headerImage from '../../public/images/fanpage-header-image.png';
import { Sixtyfour } from 'next/font/google';

const sixtyfour = Sixtyfour({
  subsets : ['latin']
});

export default function Header(){
    return (
        <header className="w-screen flex justify-center bg-[#ff669f]" >
        <Image
          src={headerImage}
          width={"100%"}
          height={246}
          alt="Twice logo"
        />
      </header>
    )
}