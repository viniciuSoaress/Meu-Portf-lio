import type { Metadata } from "next";
import { Main } from "../ui/main";
import { ListProjects } from "../ui/project/listProjects";

export const metadata: Metadata = {
  title: 'Projetos'
}


export default function Projects(){

  return(
    <Main>
      <ListProjects />
    </Main>
  )
}