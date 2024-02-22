'use client'


import Link from "next/link"

import { usePathname, } from "next/navigation"

const links = [
  { id: 1, name: 'home', link: '/' },
  { id: 2, name: 'projetos', link: '/projetos' },
]


export function NavBar() {

  const path = usePathname()

  return (
    <nav className="flex max-w-screen-xl w-full m-auto p-3 pr-6 gap-4 border-x justify-end border-neutral-600">
      {links.map(l => {
        const isPath = path == l.link
        return (
          <Link
            href={l.link}
            className={`${isPath ? 'hidden' : 'text-neutral-500'} font-semibold hover:text-white `}
            key={l.id}
          >{l.name}</Link>
        )
      })}
    </nav>
  )
}