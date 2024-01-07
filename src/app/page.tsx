import { HeaderCard } from "./ui/headerCard";
import { Main } from "./ui/main";
import { CardTec } from "./ui/cardTec";
import { tecs } from "./utils/tec";
import { Projects } from "./ui/project/projects";

import { GlobeAltIcon, ServerStackIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <Main>
      <HeaderCard />

      <h2>Habilidades Em!</h2>
      <CardTec.Root>

        <CardTec.Card>
          <CardTec.Header
            icon={<GlobeAltIcon width={24} className="text-cyan-300" />}
            info="Criação de aplicações web staticos e resposivos."
            title="Front-End"
          />
          <CardTec.List items={tecs.front} />
        </CardTec.Card>

        <CardTec.Card>
          <CardTec.Header
            icon={<ServerStackIcon width={24} className="text-green-300" />}
            info="Criação de API com eficiencia e qualidade."
            title="Back-End"
          />
          <CardTec.List items={tecs.back} />
        </CardTec.Card>

        <CardTec.Card>
          <CardTec.Header
            icon={<ComputerDesktopIcon width={24} />}
            info="Facilitar a criação, versionamento e deploy de codigo."
            title="Ferramentas"
          />
          <CardTec.List items={tecs.soft} />
        </CardTec.Card>

      </CardTec.Root>

      <h2>Projetos</h2>
      <Projects />
    </Main>
  )
}
