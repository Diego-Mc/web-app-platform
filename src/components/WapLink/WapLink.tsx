import { Button } from '@mantine/core'
import { NavLink } from 'react-router'
import { useStyles } from './useStyles'

type Props = {
  to: string
  label: string
}

export function WapLink(props: Props) {
  const { to, label } = props

  const { classes } = useStyles()

  return (
    <Button
      variant="default"
      component={NavLink}
      to={to}
      className={classes.link}
    >
      {label}
    </Button>
  )
}
