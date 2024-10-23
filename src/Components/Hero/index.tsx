import bannerImg from '../../Assets/Images/banner-hollow.jpg'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hollow Knight</h2>
        <p>
          De <span>R$ 89,00</span> <br />
          Port R$ 49,00
        </p>
        <Button
          variant="primario"
          type="button"
          title="Adicionar jogo ao carrinho"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
