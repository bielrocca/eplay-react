import Secao from '../Secao'

import { Items, Item, Action, Modal, ModalContent } from './styles'

import zelda from '../../Assets/Images/zelda.png'
import resident from '../../Assets/Images/resident.png'
import bgHollow from '../../Assets/Images/banner-hollow.jpg'

import play from '../../Assets/Images/play.png'
import zoom from '../../Assets/Images/zoom.png'
import fechar from '../../Assets/Images/fechar.png'

type GaleriaItem = {
  type: 'imagem' | 'video'
  url: string
}

const mock: GaleriaItem[] = [
  {
    type: 'imagem',
    url: zelda
  },
  {
    type: 'imagem',
    url: resident
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/Buqf-ju_rdM?si=Tl4gUFJo5yMAqX2X'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Galeria = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GaleriaItem) => {
    if (item.type === 'imagem') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GaleriaItem) => {
    if (item.type === 'imagem') return zoom
    return play
  }

  return (
    <>
      <Secao title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Secao>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Fechar" />
          </header>
          <img src={bgHollow} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Galeria
