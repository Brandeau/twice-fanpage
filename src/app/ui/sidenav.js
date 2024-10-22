import Link from "next/link";
import NavLinks from "./nav-links";

export default function Sidenav(){
    return(
        <>
            <div className="flex w-40 flex-col space-x-0 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
            </div>
        </>
    )
}