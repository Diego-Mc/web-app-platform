import { createStyles } from '@mantine/emotion'

export const useStyles = createStyles(() => ({
  td: {
    overflowWrap: 'normal',
    whiteSpace: 'normal',
    wordBreak: 'normal',
  },
  th: {
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    '@media (hover: hover)': {
      '&:hover': {
        backgroundColor: 'var(--mantine-color-gray-2)',
      },
    },
  },
}))
