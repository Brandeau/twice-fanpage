import Image from "next/image";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import between12  from '../public/between12.jpg'
import { Card } from "./ui/cards";

export default function Page() {
  return (
    <>
      <main className="grid md:grid-cols-2 sm:grid-cols-1 self-center">
        <Card title="albums" src={between12}  description="album cover"></Card>
        <Card title="members" src={between12}  description="album cover"></Card>
        <Card title="story" src={between12}  description="album cover"></Card>
        <Card title="reality" src={between12} description="album cover"></Card>
      </main>
    </>
  );
}
