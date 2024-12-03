import Link from "next/link";
import { lusitana } from "./fonts";
import Image from "next/image";
import { Lato } from 'next/font/google';

const lato = Lato({
    subsets: ['latin'],
    weight: '700'
});


export function Card({title, src, href, description}){
    return(
        <>
            <div className="p-4 bg-[#AA7D8D] hover:bg-[#c63267] w-52 m-14 rounded-lg justify-center text-center">
                <Link
                    href={href}
                >
                    <Image 
                        src={src}
                        width={200}
                        height={200}
                        alt={description}
                    />
                </Link>
            
                <h3 className={`${lato.className} ml-2 font-medium text-xl text-white`}>{title}</h3>
            </div>
        </>
    )
}