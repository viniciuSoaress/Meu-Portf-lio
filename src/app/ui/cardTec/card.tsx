
type Props = {
  children: React.ReactNode
}

export function Card({ children }: Props) {

  return (
    <div className="flex flex-col p-2 flex-1 border border-neutral-600 rounded-lg items-center gap-4">
      {children}
    </div>
  )
}