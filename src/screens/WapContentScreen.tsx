import { WapActions } from '@/components/WapActions'
import { WapForm } from '@/components/WapForm'
import { WapTable } from '@/components/WapTable'
import { WapData } from '@/types/wap-data'

type Props<T extends string> = {
  data: WapData<T>
}

export function WapContentScreen<T extends string>(props: Props<T>) {
  const { data } = props

  return (
    <>
      <WapForm data={data.form} />
      <WapTable data={data.table} />
      <WapActions data={data.actions} />
    </>
  )
}
