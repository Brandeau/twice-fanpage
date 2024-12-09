import Image from "next/image";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import between12  from '/public/images/between12.jpg'
import photoshoot from '/public/images/photoshoot.jpg'
import feels from '/public/images/feels.jpeg'
import ttt from '/public/images/ttt.jpg'
import story from '/public/images/story.jpg'
import { Card } from "./ui/cards";

export default function Page() {

const sections = [
  {title: 'albums', src:feels, href:"albums", description:"album cover"},
  {title: 'story', src:story, href:"story",description:"story cover"},
  {title: 'members', src:photoshoot, href:"members",  description:"members cover"},
  {title: 'reality', src:ttt, href:"reality",description:"realities cover"}
]
    return (
      <main className="grid md:grid-cols-2 sm:grid-cols-1 self-center ">
      {sections.map((section, index) =>{
        return(
        <Card title={section.title} src={section.src}  href={section.href} description={section.description} key={index}></Card>
        );
      })}
      </main>
    );
}
