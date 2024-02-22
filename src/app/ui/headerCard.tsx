'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { URL } from "../utils/url"


type User = {
  avatar_url: string,
  name: string,
}

export function HeaderCard() {

  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    async function handleUser() {
      const data = await fetch(URL)
      const dd: User = await data.json()
      setUser(dd)
    }
    handleUser()
  }, [])

  return (
    <section className="flex flex-col gap-8 items-center border border-neutral-600 p-6 rounded-2xl w-full">

      <div className=" flex gap-6 items-center">
        <div className="rounded-3xl  bg-gradient-to-r from-cyan-200/60 to-green-300/70 p-[2px] h-full">
          <Image
            src={user.avatar_url}
            alt={user.name}
            width={180}
            height={180}
            className="rounded-3xl"
          />
        </div>

        <div>
          <h1 className="text-xl font-semibold">Olá! Sou, <br /> {user.name}.</h1>
          <p>
            Desenvolvedor
            <a className="text-lg text-cyan-300 font-semibold animate-pulse"
              href="https://react.dev/"
              target="_blank"> React.js </a>

            e
            <a href="https://nodejs.org/en"
              target="_blank"
              className="text-green-300 text-lg font-semibold animate-pulse"> Node.js</a>.
          </p>
        </div>

      </div>

      <p>
        Desde o final do ano de 2022, venho trilhando o caminho de aspirante a desenvolvedor. Meu primeiro contato com essa nova forma de utilizar a tecnologia aconteceu por meio de uma inusitada propaganda que dizia o seguinte: <q>Entre no mercado de trabalho em 6 meses ganhando salários na faixa de 3 mil reais</q>. No final, a pessoa estava promovendo seu curso.
      </p>
      <p>
        O começo foi bem comum, com mais de um ano dedicado à aprendizagem e consolidação do que foi aprendido. Houve diversas vezes em que pensei em desistir no início, devido à falta de um caminho claro a seguir.
      </p>
      <p>
        Atualmente, o desenvolvimento web com React.js e Node.js faz parte do meu cotidiano, sendo um dos meus principais hobbies, juntamente com jogar videogame e assistir anime.
      </p>
      <p>
        E é isso.
      </p>

    </section>
  )
}