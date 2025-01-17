import { AppShell, Burger, Group, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router'
import { WapLink } from '../../components/WapLink/WapLink'
import { WapRoutes } from '@/types/wap-routes'
import { useStyles } from './useStyles'

type Props = {
  routes: WapRoutes<string>
}

export function WapScreen(props: Props) {
  const { routes } = props

  const { classes } = useStyles()

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <h4>Logo</h4>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Text size="xs" fw="bold" className={classes.navbarTitle}>
          Screens
        </Text>
        <Stack gap="xs">
          {routes.map((route) => (
            <WapLink key={route.path} to={route.path} label={route.label} />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
