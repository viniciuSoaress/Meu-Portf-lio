import type { Metadata } from "next";
import { Main } from "../ui/main";

export const metadata: Metadata = {
  title: 'Projetos'
}


export default function Projects(){

  return(
    <Main>
      <h2>Projetos</h2>
    </Main>
  )
}