'use client'

import { useEffect, useState } from "react"
import type { Repos } from "@/app/utils/types/repos"
import { URL } from "@/app/utils/url"



export function useRepository(){
  const [projects, setProjects] = useState<Repos[]>([])


  useEffect(() => {
    async function handleRepos() {
      const datas = await fetch(`${URL}/repos`)
      const data: Repos[] = await datas.json()
      setProjects(data)

    }
    handleRepos()
  }, [])

  return {
    projects
  }
}