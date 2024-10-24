import Image from "next/image";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import between12  from '../public/between12.jpg'
import { Card } from "./ui/cards";

const sections = [
  {title: 'albums', src:between12, description:"album cover"},
  {title: 'story', src:between12, description:"story cover"},
  {title: 'members', src:between12, description:"members cover"},
  {title: 'reality', src:between12, description:"realities cover"}
]

export default function Page() {
    return (
      <>
        <main className="grid md:grid-cols-2 sm:grid-cols-1 self-center">
        {sections.map((section) =>{
          return(
          <Card title={section.title} src={section.src}  description={section.description}></Card>
          );
        })}
        </main>
      </>
    );
}
