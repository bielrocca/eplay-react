import { Game } from '../../Pages/Home'
import Produto from '../Produto'
import { Lista, Container, Titulo } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListaDProdutos = ({ title, background, games }: Props) => {
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

  return (
    <Container background={background}>
      <div className="container">
        <Titulo>{title}</Titulo>
        <Lista>
          {games.map((game) => (
            <Produto
              key={game.id}
              categoria={game.details.category}
              descricao={game.description}
              imagem={game.media.thumbnail}
              infos={getGameTags(game)}
              title={game.name}
              sistema={game.details.system}
            />
          ))}
        </Lista>
      </div>
    </Container>
  )
}

export default ListaDProdutos
