import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primario' | 'secundario'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primario'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} type="button">
      {children}
    </ButtonLink>
  )
}

export default Button
