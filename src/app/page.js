'use client'

import Image from "next/image";
import bg from '../../public/background/home-bg.png'
import RenderModel from "@/components/RenderModel";
import Elaina from "@/components/Models/Elaina";
import Navigation from '../components/Navigation/index.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill
      className="w-full h-full opacity-40 object-cover object-center"  />
<div className="w-full h-screen">
    {/* */}
    <Navigation />
    <RenderModel>
      <Elaina />
    </RenderModel>
</div>
    </main>
  );
}
