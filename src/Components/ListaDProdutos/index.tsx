import { formataPreco } from '../../Utils'
import Loader from '../Loader'
import Produto from '../Produto'
import { Lista, Container, Titulo } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ListaDProdutos = ({ title, background, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push('Lançamento em breve')
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <Titulo>{title}</Titulo>
        <Lista>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Produto
                  id={game.id}
                  categoria={game.details.category}
                  descricao={game.description}
                  imagem={game.media.thumbnail}
                  infos={getGameTags(game)}
                  sistema={game.details.system}
                  title={game.name}
                />
              </li>
            ))}
        </Lista>
      </div>
    </Container>
  )
}

export default ListaDProdutos
