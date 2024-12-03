'use client'

import { useState, useEffect } from "react";

/**
 * A Next.js page component that fetches release group data based on the provided `id` parameter.
 * @param {object} param0
 * @returns {JSX.Element}
 */
export default function Page({ params }){

    const [releaseGroups, setReleaseGroups] = useState(null);

    useEffect(() => {
        async function fetchReleaseGroups(){
            const res = await fetch(`/api/release_groups/${params.id}`);
            const data = await res.json();
            console.log({ res, data })
            setReleaseGroups(data)
        };

        fetchReleaseGroups(); 
    }, []);

    if (!releaseGroups) return <div>Loading...</div>

    return(

        <>
            <h1 className="bg-red-200 p-5 rounded-xl text-center">Versions</h1>
            <br></br>

            {releaseGroups.releases.map((release) => {
                return(
                    <>
                        <div className="bg-red-200 p-10 rounded-xl m-10">
                            <p>{release.title}</p> 
                            <p>{release.release_year}</p>
                            <p>{release.countries.name}</p>
                            <p>{release.release_formats?.format}</p>
                            <p>{release.annotation}</p>
                            <br></br>
                            <h2>Tracklist</h2>
                            <br></br>
                            {release.releases_tracks.map((releases_track) =>{
                                return (
                                <p>{releases_track.tracks.title}</p>
                                )
                            })}
                            <br></br>
                        </div>
                    </>
                );
            })}
        </>
    )
}