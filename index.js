const fs = require('fs')

const file_name = 'accounts.txt'
const alfa = 'abcdefghijklmnopqrstuvwxyz'
const alfa_m = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const simb = '@#$%&'
const num = '0123456789'

var username = process.argv[2]
var pass_len = parseInt(process.argv[3])
var senha = ''

//console.log(pass_len)

function res_alfa() {
    let vet = alfa.split('')
    let num = Math.floor(Math.random()*26)
    //console.log(num)
    return vet[num]
}

function res_alfm() {
    let vet = alfa_m.split('')
    let num = Math.floor(Math.random()*26)
    //console.log(num)
    return vet[num]
}

function res_simb() {
    let vet = simb.split('')
    let num = Math.floor(Math.random()*5)
    //console.log(num)
    return vet[num]
}

function res_num() {
    let vet = num.split('')
    let valor = Math.floor(Math.random()*10)
    //console.log(valor)
    return vet[valor]
}
function gerador(pass_len){
    for(let i = 0; i < pass_len; i++){
        let rand = Math.round(Math.random()*3);
        //console.log(rand + ' switch')
        switch(rand){
            case 0:
                senha+=res_alfa().toString()
                break;
            case 1:
                senha+=res_alfm().toString()
                break;
            case 2:
                senha+=res_simb().toString()
                break;
            case 3:
                senha+=res_num().toString()
                break;
            default:
                break;
        }
    }
    return senha
}

senha = gerador(pass_len)
fs.appendFile(file_name, `Username: ${username} ; pass: ${senha} ; \n`, err => {
    if(err) { console.log(err) }
    else { console.log("Conteudo adicionado no arquivo, " + file_name)}
})