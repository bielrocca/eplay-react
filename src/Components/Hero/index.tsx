import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
import { formataPreco } from '../ListaDProdutos'
import { useDispatch } from 'react-redux'
import { addToCart, open } from '../../Store/Reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const Adicionar = () => {
    dispatch(addToCart(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>
                <br /> Por {formataPreco(game.prices.current)} <br />
              </>
            )}
          </p>
          {game.prices.current && (
            <Button
              variant="primario"
              type="button"
              title="Adicionar jogo ao carrinho"
              onClick={Adicionar}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
