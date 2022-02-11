/*
case sensitive = reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por id: getElementById)()
por nome: getElementByName()
por classe: getElementByClassName()
por seletor: querySelector
*/




/*chamando as variaveis da classe contato
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

/*aumentar a largura da caixa */
nome.style.width = '100%'
email.style.width= '100%'
assunto.style.width='100%'





function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'black'
    }else{
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'white'
        nomeOK = true
    }
}

function validaEmail(){
let txtEmail = document.querySelector('#txtEmail')
if(email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1){
    txtEmail.innerHTML = 'Email invalido'
    txtEmail.style.color = 'black'
}else{
    txtEmail.innerHTML = 'Email valido'
    txtEmail.style.color = 'white'
    emailOK = true
}
}
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML ='Texto excedeu o tamanho de 100 caracteres'
        txtAssunto.style.color = 'white'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}
function enviar(){
    if(nomeOK == true && emailOK ==true && assuntoOK == true){

    alert('Formulario enviado com sucesso')
}else{
    alert('Preencha o formulario corretamente antes de enviar')
}
}
function mapaZomm(){
    mapa.style.width ='800px'
    mapa.style.height ='600px'
}
function mapaNormal(){
    mapa.style.width ='400px'
    mapa.style.height ='250px'
}
