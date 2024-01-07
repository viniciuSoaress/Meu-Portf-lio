'use client'

import Link from "next/link"
import { ItemProject } from "./itemProject"

import { useRepository } from "@/app/utils/hooks/useRepository"


export function Projects() {

  const { projects } = useRepository()
  
  const pros = projects.slice(3, 9)



  return (
    <div className="relative">
      <article className="flex sm:flex-row flex-wrap flex-col max-w-screen-xl w-full p-4  gap-6 justify-between">

        {pros.map(pro => (
          <ItemProject item={pro} key={pro.id} />
        ))}
      </article>
      <Link href='/projetos' className="text-sm absolute right-1">Mais...</Link>
    </div>
  )

}