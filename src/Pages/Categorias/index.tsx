import ListaDProdutos from '../../Components/ListaDProdutos'
import Game from '../../models/Produto'

import resident from '../../Assets/Images/resident.png'
import diablo from '../../Assets/Images/diablo.png'
import zelda from '../../Assets/Images/zelda.png'
import starWars from '../../Assets/Images/star_wars.png'

const RPG: Game[] = [
  {
    id: 1,
    categoria: 'RPG',
    descricao: 'Teste',
    imagem: diablo,
    infos: ['-50%', 'R$ 99,99'],
    title: 'Diablo IV',
    sistema: 'Windows'
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
    categoria: 'RPG',
    descricao: 'Teste',
    imagem: diablo,
    infos: ['-50%', 'R$ 99,99'],
    title: 'Diablo IV',
    sistema: 'Windows'
  },
  {
    id: 4,
    categoria: 'RPG',
    descricao: 'Teste',
    imagem: diablo,
    infos: ['-50%', 'R$ 99,99'],
    title: 'Diablo IV',
    sistema: 'Windows'
  }
]

const Acao: Game[] = [
  {
    id: 5,
    categoria: 'Ação',
    descricao: 'Teste',
    imagem: resident,
    infos: ['-80%', 'R$ 29,99'],
    title: 'Resident Evil 4 - Remake',
    sistema: 'PS5'
  },
  {
    id: 6,
    categoria: 'Ação',
    descricao: 'Teste',
    imagem: resident,
    infos: ['-80%', 'R$ 29,99'],
    title: 'Resident Evil 4 - Remake',
    sistema: 'PS5'
  },
  {
    id: 7,
    categoria: 'Ação',
    descricao: 'Teste',
    imagem: resident,
    infos: ['-80%', 'R$ 29,99'],
    title: 'Resident Evil 4 - Remake',
    sistema: 'PS5'
  },
  {
    id: 8,
    categoria: 'Ação',
    descricao: 'Teste',
    imagem: resident,
    infos: ['-80%', 'R$ 29,99'],
    title: 'Resident Evil 4 - Remake',
    sistema: 'PS5'
  }
]

const Aventura: Game[] = [
  {
    id: 9,
    categoria: 'Aventura',
    descricao: 'Teste',
    imagem: zelda,
    infos: ['-20%', 'R$49,99'],
    title: 'Zelda',
    sistema: 'Xbox'
  },
  {
    id: 10,
    categoria: 'Aventura',
    descricao: 'Teste',
    imagem: zelda,
    infos: ['-20%', 'R$49,99'],
    title: 'Zelda',
    sistema: 'Xbox'
  },
  {
    id: 11,
    categoria: 'Aventura',
    descricao: 'Teste',
    imagem: zelda,
    infos: ['-20%', 'R$49,99'],
    title: 'Zelda',
    sistema: 'Xbox'
  },
  {
    id: 12,
    categoria: 'Aventura',
    descricao: 'Teste',
    imagem: zelda,
    infos: ['-20%', 'R$49,99'],
    title: 'Zelda',
    sistema: 'Xbox'
  }
]

const FPS: Game[] = [
  {
    id: 13,
    categoria: 'FPS',
    descricao: 'Teste',
    imagem: starWars,
    infos: ['Em breve'],
    title: 'Star Wars',
    sistema: 'Windows'
  },
  {
    id: 14,
    categoria: 'FPS',
    descricao: 'Teste',
    imagem: starWars,
    infos: ['Em breve'],
    title: 'Star Wars',
    sistema: 'Windows'
  },
  {
    id: 15,
    categoria: 'FPS',
    descricao: 'Teste',
    imagem: starWars,
    infos: ['Em breve'],
    title: 'Star Wars',
    sistema: 'Windows'
  },
  {
    id: 16,
    categoria: 'FPS',
    descricao: 'Teste',
    imagem: starWars,
    infos: ['Em breve'],
    title: 'Star Wars',
    sistema: 'Windows'
  }
]

const Categorias = () => (
  <>
    <ListaDProdutos title="RPG" background="grey" games={RPG} />
    <ListaDProdutos title="Ação" background="black" games={Acao} />
    <ListaDProdutos title="Aventura" background="grey" games={Aventura} />
    <ListaDProdutos title="FPS" background="black" games={FPS} />
  </>
)

export default Categorias
