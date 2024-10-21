import { Container, Titulo } from './styles'

export type Props = {
  title: string
  background: 'black' | 'grey'
  children: JSX.Element
}

const Secao = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{title}</Titulo>
      {children}
    </div>
  </Container>
)

export default Secao
