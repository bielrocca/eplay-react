import ListaDProdutos from '../../Components/ListaDProdutos'

import resident from '../../Assets/Images/resident.png'
import diablo from '../../Assets/Images/diablo.png'
import zelda from '../../Assets/Images/zelda.png'
import starWars from '../../Assets/Images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categorias = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((resposta) => resposta.json())
      .then((resposta) => setGamesAcao(resposta))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((resposta) => resposta.json())
      .then((resposta) => setGamesEsportes(resposta))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((resposta) => resposta.json())
      .then((resposta) => setGamesSimulacao(resposta))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((resposta) => resposta.json())
      .then((resposta) => setGamesLuta(resposta))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((resposta) => resposta.json())
      .then((resposta) => setGamesRPG(resposta))
  }, [])

  return (
    <>
      <ListaDProdutos title="RPG" background="black" games={gamesRPG} />
      <ListaDProdutos title="Ação" background="grey" games={gamesAcao} />
      <ListaDProdutos
        title="Esportes"
        background="black"
        games={gamesEsportes}
      />
      <ListaDProdutos title="Luta" background="grey" games={gamesLuta} />
      <ListaDProdutos
        title="Simulação"
        background="black"
        games={gamesSimulacao}
      />
    </>
  )
}

export default Categorias
