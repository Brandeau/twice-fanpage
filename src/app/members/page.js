'use client'

import { Card } from "../ui/cards";
import { usePathname } from "next/navigation";

const res = await fetch('/api/members');
const members = await res.json();


export default function Page(){
    const path = usePathname();
    return(
        <>
            {members.res.map((member) =>{
            return(
                <Card title={member.first_name} src={`/images/members/${member.id}.jpg`} href={`${path}/${member.id}`} description={member.id}></Card>
                );
            })}
        </>
    )
}