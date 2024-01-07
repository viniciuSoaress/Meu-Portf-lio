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
    <section className="flex gap-8 items-center border border-neutral-600 p-6 rounded-2xl">

      <div>
        <h1 className="text-xl font-semibold">Olá! Sou, <br /> {user.name}.</h1>
        <p>
          desenvolvedor
          <a className="text-lg text-cyan-300 font-semibold"
            href="https://react.dev/"
            target="_blank"> React.js </a>

          e
          <a href="https://nodejs.org/en"
            target="_blank"
            className="text-green-300 text-lg font-semibold"> Node.js</a>.
        </p>
      </div>

      <div className="rounded-full  bg-neutral-500 p-[2px] h-full">
        <Image
          src={user.avatar_url}
          alt={'www'+user.name}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
    </section>
  )
}