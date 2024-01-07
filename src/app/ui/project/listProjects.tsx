'use client'


import { ItemProject } from "./itemProject"

import { useRepository } from "@/app/utils/hooks/useRepository"


export function ListProjects() {

  const { projects } = useRepository()
  

  return (
    <div className="relative">
      <article className="flex sm:flex-row flex-wrap flex-col max-w-screen-xl w-full p-4  gap-6 justify-between">

        {projects.map(pro => (
          <ItemProject item={pro} key={pro.id} />
        ))}
      </article>
    </div>
  )

}