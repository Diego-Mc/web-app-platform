import { createStyles } from '@mantine/emotion'

export const useStyles = createStyles((theme) => ({
  container: {
    border: `1px solid ${theme.colors.gray[2]}`,
    boxShadow: theme.shadows.sm,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.white,
  },
}))
