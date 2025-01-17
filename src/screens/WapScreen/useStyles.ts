import { createStyles } from '@mantine/emotion'

export const useStyles = createStyles((theme) => ({
  navbarTitle: {
    color: theme.colors.dark[2],
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
    paddingTop: theme.spacing.xs,
  },
}))
