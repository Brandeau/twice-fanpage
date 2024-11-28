'use client'

import { Card } from "../ui/cards";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

/**
 * A Next.js page component that fetches release group data based on the provided `id` parameter.
 * @returns {JSX.Element} The rendered component with release group data or a loading message.
 */
export default function Page(){

    const [releaseGroups, setReleaseGroups] = useState(null);

    useEffect(() => {
        async function fetchReleaseGroups(){
            const res = await fetch(`/api/release_groups/`);
            const data = await res.json();
            console.log({ res, data })
            setReleaseGroups(data)
        };

        fetchReleaseGroups(); 
    }, []);

    if (!releaseGroups) return <div>Loading...</div>
    const path = usePathname();
    return(
        <>
            {releaseGroups.res.map((releaseGroup) =>{
            return(
                <Card title={releaseGroup.name} src={`/images/releases/${releaseGroup.id}.webp`} href={`${path}/${releaseGroup.id}`} description="album cover"></Card>
                );
            })}
        </>
    )
}