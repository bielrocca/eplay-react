import { useEffect, useState } from 'react'

import Banner from '../../Components/Banner'
import ListaDProdutos from '../../Components/ListaDProdutos'

import resident from '../../Assets/Images/resident.png'
import diablo from '../../Assets/Images/diablo.png'
import zelda from '../../Assets/Images/zelda.png'
import starWars from '../../Assets/Images/star_wars.png'

export interface GaleriaItem {
  type: 'imagem' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GaleriaItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((resposta) => resposta.json())
      .then((resposta) => setPromocoes(resposta))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((resposta) => resposta.json())
      .then((resposta) => setEmBreve(resposta))
  }, [])

  return (
    <>
      <Banner />
      <ListaDProdutos title="Promoções" background="grey" games={promocoes} />
      <ListaDProdutos title="Em Breve" background="black" games={emBreve} />
    </>
  )
}

export default Home
