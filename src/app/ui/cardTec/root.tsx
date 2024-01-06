
type Props = {
  children: React.ReactNode
}

export function Root({ children }: Props) {
  return (
    <section className="flex sm:flex-row flex-col p-4 w-full gap-6  max-w-screen-xl justify-between">
      {children}
    </section>
  )
}