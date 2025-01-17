import { BackgroundImage, Center, Stack, Title } from '@mantine/core'
import { LoginForm } from '../../components/LoginForm'
import { useAuth } from '../../hooks/useAuth'
import { Navigate } from 'react-router'
import { useStyles } from './useStyles'
import LoginBg from '@/assets/LoginBg.jpg'

type Props = {
  onLoginSuccess: () => void
}

export function LoginScreen(props: Props) {
  const { onLoginSuccess } = props
  const { isAuthorized } = useAuth()
  const { classes } = useStyles()

  if (isAuthorized) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = () => {
    onLoginSuccess()
  }

  return (
    <BackgroundImage src={LoginBg} radius="sm">
      <Center h="100dvh" w="100dvw">
        <Stack
          miw={0}
          maw={600}
          w="100%"
          p="xl"
          m="xl"
          className={classes.container}
        >
          <Title order={2}>Login</Title>
          <LoginForm onSubmit={handleSubmit} />
        </Stack>
      </Center>
    </BackgroundImage>
  )
}
