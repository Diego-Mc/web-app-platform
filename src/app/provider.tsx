import { PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'
import '@mantine/core/styles.css'
import { emotionTransform } from '@mantine/emotion'
import { MantineEmotionProvider } from '@mantine/emotion'
import { mobileTheme } from '@/lib/mantine/theme'
import { useIsMobile } from '@/hooks/useIsMobile'

export function Provider(props: PropsWithChildren) {
  const isMobile = useIsMobile()

  return (
    <MantineProvider
      theme={isMobile ? mobileTheme : undefined}
      stylesTransform={emotionTransform}
    >
      <MantineEmotionProvider>
        <Notifications />
        {props.children}
      </MantineEmotionProvider>
    </MantineProvider>
  )
}
