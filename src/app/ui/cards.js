import Link from "next/link";
import { lusitana } from "./fonts";
import Image from "next/image";

export function Card({title, src, description}){
    return(
        <>
            <div className="p-4 bg-gray-50 w-52 m-14 rounded-lg justify-center text-center">
                <Link
                    href={`/${title}`}
                >
                    <Image 
                        src={src}
                        width={200}
                        height={200}
                        alt={description}
                    />
                </Link>
            
                <h3 className={`${lusitana.className} ml-2 font-medium text-xl`}>{title}</h3>
            </div>
        </>
    )
}