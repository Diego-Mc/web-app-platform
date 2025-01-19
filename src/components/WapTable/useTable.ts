import { WapTableData } from '@/types/wap-data'
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo } from 'react'

type Props<T extends string> = {
  data: WapTableData<T>
}

const getColumns = (data: WapTableData<string>) => {
  return data.columns.map((column) => ({
    accessorKey: column.key,
    header: column.label,
  }))
}

export function useTable<T extends string>(props: Props<T>) {
  const { data } = props

  const columns = useMemo(() => getColumns(data), [data])
  const rows = useMemo(() => data.rows, [data])

  return useReactTable({
    columns,
    data: rows,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })
}
