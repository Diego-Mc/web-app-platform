import { NavLink } from 'react-router'

type Props = {
  to: string
  label: string
}

export function WapLink(props: Props) {
  const { to, label } = props

  return (
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? { color: 'green' } : {})}
    >
      {label}
    </NavLink>
  )
}
