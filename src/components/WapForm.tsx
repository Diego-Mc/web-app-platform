import { WapFormData } from '@/types/wap-data'

type Props<T extends string> = {
  data: WapFormData<T>
}

export function WapForm<T extends string>(props: Props<T>) {
  const { data } = props

  //TODO: render form
  console.log(data)

  return (
    <>
      <h1>Form</h1>
    </>
  )
}
