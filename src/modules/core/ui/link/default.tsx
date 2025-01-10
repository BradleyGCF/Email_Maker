import { Link as ReactRouterLink } from 'react-router-dom'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode | string
}

export function Link({ children, ...props }: Props) {
  if (props.href?.startsWith('http')) {
    return (
      <a href={props.href} className={props.className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <ReactRouterLink to={props.href || ''} className={props.className} {...props}>
      {children}
    </ReactRouterLink>
  )
}
