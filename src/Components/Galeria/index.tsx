import { useState } from 'react'

import Secao from '../Secao'

import * as S from './styles'

import play from '../../Assets/Images/play.png'
import zoom from '../../Assets/Images/zoom.png'
import fechar from '../../Assets/Images/fechar.png'

type Props = {
  defaultCover: string
  name: string
  items: GaleriaItem[]
}

interface ModalState extends GaleriaItem {
  estaVisivel: boolean
}

const Galeria = ({ defaultCover, name, items }: Props) => {
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
        <S.Items>
          {items.map((media, index) => (
            <S.Item
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
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a midia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Secao>
      <S.Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Fechar" onClick={closeModal} />
          </header>
          {modal.type === 'imagem' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default Galeria
