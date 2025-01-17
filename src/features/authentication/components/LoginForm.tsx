import { Button } from '@mantine/core'
import { Group } from '@mantine/core'
import { TextInput } from '@mantine/core'
import { isEmail, matches } from '@mantine/form'
import { useForm } from '@mantine/form'
import { FormValues } from '../types/login'
import { useAuth } from '../hooks/useAuth'

type Props = {
  onSubmit: (values: FormValues) => void
}

export function LoginForm({ onSubmit }: Props) {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail('Invalid email'),
      password: matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &)',
      ),
    },
  })

  const { login } = useAuth()
  const handleSubmit = (values: FormValues) => {
    login()
    onSubmit(values)
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Password"
        placeholder="Password"
        withAsterisk
        key={form.key('password')}
        {...form.getInputProps('password')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Login</Button>
      </Group>
    </form>
  )
}
