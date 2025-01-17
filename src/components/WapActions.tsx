import { WapAction } from '@/types/wap-data'
import { Button, Flex, Stack, Title } from '@mantine/core'
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
          leftSection={<IconBrandTablerFilled size={20} />}
          key={key}
          onClick={() => console.log(action.payload)}
        >
          Log
        </Button>
      )
    case 'notification':
      return (
        <Button
          leftSection={<IconAlertSquareFilled size={20} />}
          key={key}
          onClick={() => notifications.show(action.payload)}
        >
          Notification
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
    <Stack>
      <Title order={2}>Actions</Title>
      <Flex gap="xs">
        {data.map((action, index) => renderActionComponent(action, index))}
      </Flex>
    </Stack>
  )
}
