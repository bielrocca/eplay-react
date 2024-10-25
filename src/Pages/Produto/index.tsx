import { useParams } from 'react-router-dom'
import Hero from '../../Components/Hero'
import Secao from '../../Components/Secao'

import Galeria from '../../Components/Galeria'

import hollow from '../../Assets/Images/hollow_knight.png'
import { useEffect, useState } from 'react'
import { Game } from '../Home'

const Produto = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((resposta) => resposta.json())
      .then((resposta) => setGame(resposta))
      .catch((error) => console.error('Erro ao carregar dados do jogo:', error))
  }, [id])

  if (!game) {
    return <p>Carregando dados do jogo...</p>
  }

  return (
    <>
      <Hero game={game} />
      <Secao title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Secao>
      <Secao title="Mais detalhes" background="grey">
        <p>
          Plataforma: {game.details.system} <br />
          Desenvolvedor: {game.details.developer} <br />
          Editora: {game.details.publisher} <br />
          Idiomas: O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')} <br />
        </p>
      </Secao>
      <Galeria
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Produto
