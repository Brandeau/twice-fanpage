'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * A Next.js page component that fetches member data based on the provided `memberId` parameter.
 * @param {object} param0
 * @returns {JSX.Element}
 */
export default function Page({ params }){

    const [members, setMembers] = useState(null);

    useEffect(() => {
        async function fetchMembers(){
            const res = await fetch(`/api/members/${params.id}`);
            const data = await res.json();
            setMembers(data)
        };

        fetchMembers(); 
    }, []);

    if (!members) return <div>Loading...</div>

    const firstName = members.first_name;
    const lastName = members.last_name;
    const firstKoreanName = members.first_name_kor;
    const lastKoreanName = members.last_name_kor;
    const dateOfBirth = members.date_of_birth;
    const firstJapaneseName = members.first_name_jap;
    const lastJapaneseName = members.last_name_jap;
    const firstChineseName = members.first_name_ch;
    const lastChineseName = members.last_name_ch;
    const dateFormatted = dateOfBirth.substring(0, 10);
    return(
        <>
            <div className="bg-red-200 p-10 rounded-xl">
                <Image 
                    src={`/images/members/${params.id}.jpg`}
                    width={200}
                    height={200}
                    alt=""
                />
            <p>{lastName} {firstName}</p>
            <p>{lastKoreanName ? lastKoreanName : null}{firstKoreanName}</p>
            <p>{lastJapaneseName ? lastJapaneseName : null}{firstJapaneseName ? firstJapaneseName : null}</p>
            <p>{lastChineseName ? lastChineseName : null}{firstChineseName ? firstChineseName : null}</p>
            <p>{`Date of Birth: ${dateFormatted}`}</p>
            </div>
        </>
    )
}