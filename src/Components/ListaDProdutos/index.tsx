import Produto from '../Produto'
import { Lista, Container, Titulo } from './styles'

type Props = {
  title: string
  background: 'grey' | 'black'
}

const ListaDProdutos = ({ title, background }: Props) => (
  <Container>
    <div className="container">
      <Titulo>{title}</Titulo>
      <Lista>
        <Produto />
        <Produto />
        <Produto />
        <Produto />
      </Lista>
    </div>
  </Container>
)

export default ListaDProdutos
