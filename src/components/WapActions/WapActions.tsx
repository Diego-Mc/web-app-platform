import { WapAction } from '@/types/wap-data'
import { Button, Group } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import {
  IconAlertSquareFilled,
  IconBrandTablerFilled,
} from '@tabler/icons-react'

const renderActionComponent = (
  action: WapAction[number],
  key: string | number,
) => {
  switch (action.type) {
    case 'log':
      return (
        <Button
          variant="default"
          leftSection={<IconBrandTablerFilled size={20} />}
          key={key}
          onClick={() => console.log(action.payload)}
          miw="fit-content"
        >
          {action.label}
        </Button>
      )
    case 'notification':
      return (
        <Button
          variant="default"
          leftSection={<IconAlertSquareFilled size={20} />}
          key={key}
          onClick={() => notifications.show(action.payload)}
          miw="fit-content"
        >
          {action.label}
        </Button>
      )
  }
}

type Props = {
  data: WapAction
}

export function WapActions(props: Props) {
  const { data } = props

  return (
    <Group grow wrap="wrap">
      {data.map((action, index) => renderActionComponent(action, index))}
    </Group>
  )
}
