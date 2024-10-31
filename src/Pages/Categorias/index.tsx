import ListaDProdutos from '../../Components/ListaDProdutos'
import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../Services/API'

const Categorias = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportsGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ListaDProdutos
          title="RPG"
          background="black"
          games={rpgGames}
          id="rpg"
        />
        <ListaDProdutos
          title="Ação"
          background="grey"
          games={actionGames}
          id="action"
        />
        <ListaDProdutos
          title="Esportes"
          background="black"
          games={sportsGames}
          id="esporte"
        />
        <ListaDProdutos
          title="Luta"
          background="grey"
          games={fightGames}
          id="luta"
        />
        <ListaDProdutos
          title="Simulação"
          background="black"
          games={simulationGames}
          id="simulacao"
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
