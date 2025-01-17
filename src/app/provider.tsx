import { PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'
import '@mantine/core/styles.css'
import { emotionTransform } from '@mantine/emotion'
import { MantineEmotionProvider } from '@mantine/emotion'

export function Provider(props: PropsWithChildren) {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <Notifications />
        {props.children}
      </MantineEmotionProvider>
    </MantineProvider>
  )
}
