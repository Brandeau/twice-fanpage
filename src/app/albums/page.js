'use client'

import { Card } from "../ui/cards";
import momo from '../../public/momo.jpg'
import { usePathname } from "next/navigation";

const albums = [
    {href:"ttt", src:momo, title:"Talk That Talk",description:"ttt"},
    {href:"eyes", src:momo, title:"Eyes Wide Open",description:"eyes"},
]

export default function Page(){
    const path = usePathname();
    return(
        <>
            {albums.map((album) =>{
            return(
                <Card title={album.title} src={album.src} href={`${path}/${album.href}`} description={album.description}></Card>
                );
            })}
        </>
    )
}