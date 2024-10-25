
import Image from "next/image";

export default function Page({ params }){
    return(
        <>
            <Image 
                src=""
                width={200}
                height={200}
                alt=""
            />
            <p>{params.albumName}</p>
        </>
    )
}