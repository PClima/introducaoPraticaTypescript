const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

const pedro: {nome: string, idade: number, profissao: string} = {
    nome: 'Pedro',
    idade: 22,
    profissao: 'Desenvolvedor'
}

// pessoa.idade = '29' *Nao funciona pois a idade nao aceita string

//enum Profissao{
//    Professora,
//    JogadorDeFutebol
//}

interface Pessoas{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoas{
    materias: string[]
}

const pri: Pessoas = {
    nome: 'Priscila',
    idade: 21,
    profissao: Profissao.Desenvolvedor
}

const MariaLuiza: Estudante = {
    nome: 'Maria Luiza',
    idade: 15,
    materias: ['matematica', 'portugues']
}