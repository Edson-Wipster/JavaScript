const input=document.querySelector('input')
const btnChutar=document.querySelector('#btn-chutar')
const btnSound=document.querySelector('#btn-sound')
const audio=document.querySelector('audio')
const mensagem=document.querySelector('p')
let sortiado=sortearNumero()

function sortearNumero(){
    let sort=(Math.floor(Math.random()*(10-1+1) +1))
    console.log(sort)
    return sort
}
input.onblur=()=>{
    let num=input.value
    if(num<0||num>10||num==''){
        mensagem.classList.add('exibir')
        input.value=''
        setTimeout(()=>{
            mensagem.classList.remove('exibir')
        },1570)
    }
}
btnChutar.onclick=()=>{
    if(input.value==sortiado){
        mensagem.textContent=`[Voce ganhou] voce eh um mentalista`
        mensagem.classList.add('ganhou')
        setTimeout(()=>{
            mensagem.classList.remove('ganhou')
            mensagem.textContent=`Voce nao esta sendo um(a) mentalista! Digite um numero entre 1 a 10`
            input.value=''
        },1570)
        sortiado=sortearNumero()
    }else{
        mensagem.textContent=`[NUMERO ERRADO] voce ainda nao es um mentalista`
        mensagem.classList.add('exibir')
        input.value=''
        setTimeout(()=>{
            mensagem.classList.remove('exibir')
            mensagem.textContent=`Voce nao esta sendo um(a) mentalista! Digite um numero entre 1 a 10`
            input.value=''
        },1570)
    }
    
}
btnSound.onclick=function(){
    audio.play? audio.muted=true:audio.muted=false
}