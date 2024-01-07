'use client'

import { useEffect, useState } from "react"
import { URL } from "../../utils/url"
import type { Repos } from "@/app/utils/types/repos"
import { ItemProject } from "./itemProject"




export function Projects(){

  const [projects, setProjects] = useState<Repos[]>([])
  const pros = projects.slice(3,9)

  useEffect(() => {
    async function handleRepos(){
      const datas = await fetch(`${URL}/repos`)
      const data:Repos[] = await datas.json()
      setProjects(data)
      
    } 
    handleRepos()
  },[])

  return (
    <article className="flex sm:flex-row flex-wrap flex-col max-w-screen-xl w-full p-4  gap-6 justify-between">
      {pros.map(pro => (
        <ItemProject item={pro} key={pro.id}/>
      ))}
    </article>
  )

}