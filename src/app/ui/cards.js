import { lusitana } from "./fonts";
import Image from "next/image";

export function Card({title, src, description}){
    return(
        <>
            <div>
                <Image 
                    src={src}
                    width={200}
                    height={200}
                    alt={description}
                />
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
        </>
    )
}