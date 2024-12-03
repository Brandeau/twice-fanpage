'use client'

import { Card } from "../ui/cards";
import { usePathname } from "next/navigation";

const res = await fetch('/api/members');
const members = await res.json();


export default function Page(){
    const path = usePathname();
    return(
        <>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 self-center ">
                {members.res.map((member) =>{
                return(
                    <Card title={member.first_name} src={`/images/members/${member.id}.jpg`} href={`${path}/${member.id}`} description={member.id}></Card>
                    );
            })}
            </div>
        </>
    )
}