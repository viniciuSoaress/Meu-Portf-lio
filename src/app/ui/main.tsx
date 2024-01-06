

export function Main({children}: {children: React.ReactNode}) {

  return (
    <main className="flex min-h-screen max-w-screen-xl m-auto flex-col items-center gap-10 p-10 border-x border-neutral-600">
      {children}
    </main>
  )
} 