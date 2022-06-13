let any: any
any = 1
any = "string"
any = true

//Variavel do tipo string recebeu um valor boolean sem dar erro utilizando o any
let string: string = "texto"
string = any

let unknown: unknown
unknown = 1
unknown = "string"
unknown = false

//Utilizando o unknown ele indica erro, nos obrigando a fazer uma verificacao do tipo para permitir a operacao
let string2: string = "texto"
//string2 = unknown

if(typeof unknown === 'string'){
    string2 = unknown
}