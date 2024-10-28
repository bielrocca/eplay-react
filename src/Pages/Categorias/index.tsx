import ListaDProdutos from '../../Components/ListaDProdutos'
import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../Services/API'

import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categorias = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportsGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ListaDProdutos title="RPG" background="black" games={rpgGames} />
        <ListaDProdutos title="Ação" background="grey" games={actionGames} />
        <ListaDProdutos
          title="Esportes"
          background="black"
          games={sportsGames}
        />
        <ListaDProdutos title="Luta" background="grey" games={fightGames} />
        <ListaDProdutos
          title="Simulação"
          background="black"
          games={simulationGames}
        />
      </>
    )
  }

  return (
    <div>
      <p>Carregando...</p>
    </div>
  )
}

export default Categorias
