import type { Repos } from "@/app/utils/types/repos"

type Props = {
  item: Repos
}

export function ItemProject({ item }: Props) {

  return (
    <div className="flex-1 border border-neutral-600 rounded-lg p-4 relative">

      <h2 className="font-semibold text-xs border-b mb-1">{item.name}</h2>
      <p className="font-light text-xs text-gray-200 mb-2">{item.description}</p>
      
      <div className="flex justify-between w-full px-6 absolute left-0 bottom-1">
        <a
          href={item.html_url}
          className="text-[10px] hover:text-neutral-400 font-extralight transition-colors"
          target="_blank">Github</a>

          {item.homepage ? (
            <a
            href={item.homepage}
            className="text-[10px] hover:text-neutral-400 font-extralight transition-colors"
            target="_blank">Link</a>
          ) : ''}
      </div>
    </div>
  )
}