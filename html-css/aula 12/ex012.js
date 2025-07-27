var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`)
if (hora < 12 && hora >= 6) {
    console.log('Bom dia!')
} else if(hora > 12 && hora <=18) {
    console.log('Boa tarde!')
} else if(hora < 6) {
    console.log('Boa Madrugada!')
} else {
    console.log('Boa noite!')
}