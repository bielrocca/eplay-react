import { useState } from 'react'

import Secao from '../Secao'
import { GaleriaItem } from '../../Pages/Home'

import { Items, Item, Action, Modal, ModalContent } from './styles'

import zelda from '../../Assets/Images/zelda.png'
import resident from '../../Assets/Images/resident.png'
import bgHollow from '../../Assets/Images/banner-hollow.jpg'

import play from '../../Assets/Images/play.png'
import zoom from '../../Assets/Images/zoom.png'
import fechar from '../../Assets/Images/fechar.png'

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

interface ModalState extends GaleriaItem {
  estaVisivel: boolean
}

const Galeria = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    estaVisivel: false,
    type: 'imagem',
    url: ''
  })

  const getMediaCover = (item: GaleriaItem) => {
    if (item.type === 'imagem') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GaleriaItem) => {
    if (item.type === 'imagem') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      estaVisivel: false,
      type: 'imagem',
      url: ''
    })
  }

  return (
    <>
      <Secao title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  estaVisivel: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
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
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'imagem' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Galeria
