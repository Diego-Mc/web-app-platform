import { Button } from '@mantine/core'
import { NavLink } from 'react-router'
import { useStyles } from './useStyles'

type Props = {
  to: string
  label: string
  onClick?: () => void
}

export function WapLink(props: Props) {
  const { to, label, onClick } = props

  const { classes } = useStyles()

  return (
    <Button
      variant="default"
      component={NavLink}
      to={to}
      className={classes.link}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}
