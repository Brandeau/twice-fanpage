'use client'

import { useState, useEffect } from "react";

export default function Page(){

    const [story, setStory] = useState(null);

    useEffect(() => {
        async function fetchStory(){
            const res = await fetch(`/api/story`);
            const data = await res.json();
            setStory(data)
        };

        fetchStory(); 
    }, []);

    if (!story) return <div>Loading...</div>


    return(
        <>
            <div className="bg-red-200 p-20 rounded-xl">
                <p>Story</p>
                <br></br>
                <p>{story.query.pages[46657634].extract}</p>
            </div>
        </>
    )
}