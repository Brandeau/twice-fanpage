'use client'

import { Card } from "../ui/cards";
import momo from '../../public/momo.jpg'
import { usePathname } from "next/navigation";

const members = [
    {href:"momo", src:momo, title:"momo",description:"momo"},
    {href:"nayeon", src:momo, title:"nayeon",description:"nayeon"},
]

export default function Page(){
    const path = usePathname();
    return(
        <>
            {members.map((member) =>{
            return(
                <Card title={member.title} src={member.src} href={`${path}/${member.href}`} description={member.description}></Card>
                );
            })}
        </>
    )
}