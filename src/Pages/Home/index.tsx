import Banner from '../../Components/Banner'
import ListaDProdutos from '../../Components/ListaDProdutos'
import Game from '../../models/Produto'

import resident from '../../Assets/Images/resident.png'
import diablo from '../../Assets/Images/diablo.png'
import zelda from '../../Assets/Images/zelda.png'
import starWars from '../../Assets/Images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    categoria: 'Ação',
    descricao: 'Teste',
    imagem: resident,
    infos: ['-80%', 'R$ 29,99'],
    title: 'Resident Evil 4 - Remake',
    sistema: 'PS5'
  },
  {
    id: 2,
    categoria: 'RPG',
    descricao: 'Teste',
    imagem: diablo,
    infos: ['-50%', 'R$ 99,99'],
    title: 'Diablo IV',
    sistema: 'Windows'
  },
  {
    id: 3,
    categoria: 'FPS',
    descricao: 'Teste',
    imagem: starWars,
    infos: ['-10%', 'R$ 149,99'],
    title: 'Star Wars',
    sistema: 'Windows'
  },
  {
    id: 4,
    categoria: 'Aventura',
    descricao: 'Teste',
    imagem: zelda,
    infos: ['-80%', 'R$ 39,99'],
    title: 'Zelda',
    sistema: 'Xbox'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    categoria: 'RPG',
    descricao: 'Teste',
    imagem: diablo,
    infos: ['Em breve'],
    title: 'Diablo IV',
    sistema: 'Windows'
  },
  {
    id: 6,
    categoria: 'Ação',
    descricao: 'Teste',
    imagem: resident,
    infos: ['Em breve'],
    title: 'Resident Evil 4 - Remake',
    sistema: 'PS5'
  },
  {
    id: 7,
    categoria: 'FPS',
    descricao: 'Teste',
    imagem: starWars,
    infos: ['Em breve'],
    title: 'Star Wars',
    sistema: 'Windows'
  },
  {
    id: 8,
    categoria: 'Aventura',
    descricao: 'Teste',
    imagem: zelda,
    infos: ['Em breve'],
    title: 'Zelda',
    sistema: 'Xbox'
  }
]

const Home = () => (
  <>
    <Banner />
    <ListaDProdutos title="Promoções" background="grey" games={promocoes} />
    <ListaDProdutos title="Em Breve" background="black" games={emBreve} />
  </>
)

export default Home
