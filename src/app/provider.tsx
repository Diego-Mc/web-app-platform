import { PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'
import '@mantine/core/styles.css'

export function Provider(props: PropsWithChildren) {
  return (
    <MantineProvider>
      <Notifications />
      {props.children}
    </MantineProvider>
  )
}
