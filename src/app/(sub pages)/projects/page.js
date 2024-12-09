'use client'

import Image from "next/image";
import bg from '../../../../public/background/projects-bg.png';
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from '@/components/Models/Staff';

export default function Home() {
  return (
    <main className="">
      <Image src={bg} alt="background-image"
      className="w-full h-full left-0 top-0 fixed opacity-25 object-cover object-center"  />
        <ProjectList projects={projectsData} />
        <div className="flex items-center justify-center top-20 left-0 fixed h-screen">
        <RenderModel>
            <Staff />
        </RenderModel>
        </div>
    </main>
  );
}
