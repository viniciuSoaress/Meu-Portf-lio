

type Props = {
  // children: React.ReactNode,
  items: {
    name: string,
    id: number
  }[]
}

export function ListsItems({ items }: Props) {

  return (
    <ul className="p-3 w-full list-disc">
      {items.map((item) => (
        <li
          className={`text-sm text-gray-200 my-1  border-neutral-500`}
          key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}