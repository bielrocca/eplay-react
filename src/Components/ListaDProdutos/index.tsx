import Game from '../../models/Produto'
import Produto from '../Produto'
import { Lista, Container, Titulo } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

const ListaDProdutos = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{title}</Titulo>
      <Lista>
        {games.map((game) => (
          <Produto
            key={game.id}
            categoria={game.categoria}
            descricao={game.descricao}
            imagem={game.imagem}
            infos={game.infos}
            title={game.title}
            sistema={game.sistema}
          />
        ))}
      </Lista>
    </div>
  </Container>
)

export default ListaDProdutos
