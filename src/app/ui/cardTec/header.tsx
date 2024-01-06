


type Props = {
  icon: React.ReactNode,
  title: string,
  info: string
}


export function Header({ title, info, icon}:Props){
  return(
    <header className="flex flex-col items-center text-center">
      {icon}
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="font-light text-xs text-gray-200">{info}</p>
    </header>
  )
}