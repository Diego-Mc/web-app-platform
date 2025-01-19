import {
  AppShell,
  Burger,
  Button,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router'
import { WapLink } from '../../components/WapLink/WapLink'
import { useStyles } from './useStyles'
import { IconLogout } from '@tabler/icons-react'
import { useAuth } from '@/features/authentication/hooks/useAuth'
import { WapRoute } from '@/types/wap-routes'

type Props = {
  routes: WapRoute[]
}

export function WapScreen(props: Props) {
  const { routes } = props

  const { classes } = useStyles()

  const { logout } = useAuth()

  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] =
    useDisclosure()
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
        <Group h="100%" px="md" justify="space-between" align="center">
          <Group h="100%" align="center">
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
            <Title order={4} m={0}>
              Logo
            </Title>
          </Group>
          <Group h="100%">
            <Button
              onClick={logout}
              variant="default"
              rightSection={<IconLogout size={16} />}
            >
              Logout
            </Button>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Text size="xs" fw="bold" className={classes.navbarTitle}>
          Screens
        </Text>
        <Stack gap="xs">
          {routes.map((route) => (
            <WapLink
              key={route.path}
              onClick={closeMobile}
              to={route.path}
              label={route.label}
            />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
