import { createStyles } from '@mantine/emotion'

export const useStyles = createStyles((theme) => ({
  link: {
    '&.active': {
      backgroundColor: theme.colors.dark[9],
      color: theme.colors.dark[0],
      borderColor: theme.colors.dark[9],
    },
  },
}))
