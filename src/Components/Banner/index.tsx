import { Imagem, Precos, Titulo } from './styles'
import { useGetDestaqueQuery } from '../../Services/API'

import Tag from '../Tag'
import Button from '../Button'
import { formataPreco } from '../../Utils'

const Banner = () => {
  const { data: game } = useGetDestaqueQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do Dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/produto/${game.id}`}
          title="Clique aqui para aproveitar esta oferta!"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
