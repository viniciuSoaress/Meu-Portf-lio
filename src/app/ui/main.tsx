

export function Main({children}: {children: React.ReactNode}) {

  return (
    <main className="flex min-h-screen max-w-screen-xl m-auto flex-col items-center justify-between p-24 border-x border-neutral-600">
      {children}
    </main>
  )
} 