import { Dispatch, SetStateAction } from "react"

type PaginationProps = {
  setPage: Dispatch<SetStateAction<number>>
  page: number
  next?: string | null
  previous?: string | null
}

export default function Pagination({ setPage, page, next = null, previous = null } : PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => setPage(old => Math.max(old - 1, 0))}
        disabled={!previous}
        className="px-4 py-2 text-4xl font-bold cursor-pointer bg-blue-500 text-white rounded bg-transparent"
      >
        {'<'}
      </button>
      
      <span className="px-4 py-2 text-sm mt-2">
        Page {page + 1}
      </span>
      
      <button
        onClick={() => {
          setPage(old => old + 1)
        }}
        disabled={!next}
        className="px-4 py-2 text-4xl font-bold cursor-pointer bg-blue-500 text-white rounded bg-transparent"
      >
        {'>'}
      </button>
    </div>
  )
}