import { WapTableData } from '@/types/wap-data'

type Props<T extends string> = {
  data: WapTableData<T>
}

export function WapTable<T extends string>(props: Props<T>) {
  const { data } = props

  //TODO: render table
  console.log(data)

  return (
    <>
      <h1>Table</h1>
    </>
  )
}
