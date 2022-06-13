function printaValoresNumericos(numero1: number, numero2: number):void{
    console.log(numero1 + numero2)
}

function printaValoresNumericos2(numero1: number, numero2: number, callback: (numero: number) => number): number{
    let resultado = numero1 + numero2

    return callback(resultado)
}

function aoQuadrado(numero: number): number{
    return numero * numero
}

console.log(printaValoresNumericos2(1, 2, aoQuadrado))
    