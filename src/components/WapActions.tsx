import { WapAction } from '@/types/wap-data'

type Props = {
  data: WapAction
}

export function WapActions(props: Props) {
  const { data } = props

  //TODO: render actions
  console.log(data)

  return (
    <>
      <h1>Actions</h1>
    </>
  )
}
