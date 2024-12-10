'use client'

import { Card } from "../ui/cards";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


export default function Page(){
    const [members, setMembers] = useState(null);

    useEffect(() => {

        async function fetchMembers(){
            const res = await fetch(`/api/members/`);
            const data = await res.json();
            setMembers(data)
        };

        fetchMembers(); 
    }, []);

    const path = usePathname();
    if (!members) return <div>Loading...</div>

    return(
        <div className="grid md:grid-cols-3 sm:grid-cols-1 self-center ">
                {members.res.map((member, index) =>{
                return(
                    <Card title={member.first_name} src={`/images/members/${member.id}.jpg`} href={`${path}/${member.id}`} description={member.id} key={index}></Card>
                    );
            })}
            </div>
    )
}