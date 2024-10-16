import Produto from '../Produto'
import { Lista, Container, Titulo } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
}

const ListaDProdutos = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{title}</Titulo>
      <Lista>
        <Produto
          categoria="Ação"
          descricao="Teste"
          imagem="https://placehold.co/222x250"
          infos={['-80%', 'R$ 29,99']}
          title="Rainbow Six Siege"
          sistema="Windows"
        />
        <Produto
          categoria="Ação"
          descricao="Teste"
          imagem="https://placehold.co/222x250"
          infos={['-80%', 'R$ 29,99']}
          title="Rainbow Six Siege"
          sistema="Windows"
        />
        <Produto
          categoria="Ação"
          descricao="Teste"
          imagem="https://placehold.co/222x250"
          infos={['-80%', 'R$ 29,99']}
          title="Rainbow Six Siege"
          sistema="Windows"
        />
        <Produto
          categoria="Ação"
          descricao="Teste"
          imagem="https://placehold.co/222x250"
          infos={['-80%', 'R$ 29,99']}
          title="Rainbow Six Siege"
          sistema="Windows"
        />
      </Lista>
    </div>
  </Container>
)

export default ListaDProdutos
