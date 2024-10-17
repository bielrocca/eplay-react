class Game {
  id: number
  title: string
  categoria: string
  sistema: string
  descricao: string
  infos: string[]
  imagem: string

  constructor(
    id: number,
    titulo: string,
    categoria: string,
    sistema: string,
    descricao: string,
    infos: string[],
    imagem: string
  ) {
    this.id = id
    this.title = titulo
    this.categoria = categoria
    this.sistema = sistema
    this.descricao = descricao
    this.infos = infos
    this.imagem = imagem
  }
}

export default Game
