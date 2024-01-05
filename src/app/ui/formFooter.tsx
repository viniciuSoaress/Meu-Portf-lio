'use client'

import { FormEvent } from "react"

export function FormFooter() {

  function handleMessage(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    alert('Obrigado pelo Freedback.')
  }

  return (
    <form 
    className="flex flex-col"
    onSubmit={handleMessage}
    >

      <label htmlFor="freedback">Freedback</label>
      <textarea
        className="bg-[#151516] p-2 rounded-lg mt-2"
        id="freedback"
        placeholder="mensagem"
      />
      <button type="submit">Enviar</button>
    </form>
  )
}