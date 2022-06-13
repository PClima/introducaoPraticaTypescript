"use strict";
function somar(numero1, numero2) {
    if (typeof numero1 === 'string' || typeof numero2 === 'string') {
        return numero1.toString() + numero2.toString();
    }
    return numero1 + numero2;
}
function somar2(numero1, numero2) {
    if (typeof numero1 === 'string' || typeof numero2 === 'string') {
        return numero1.toString() + numero2.toString();
    }
    return numero1 + numero2;
}
console.log(somar2(1, 5));
console.log(somar2('Ola, ', 'Mundo'));
console.log(somar2('Ola, ', 1));
