document.addEventListener('DOMContentLoaded',()=>{
    let inputName=document.querySelector('#name')
    let inputAge=document.querySelector('#age')
    let inputHeight=document.querySelector('#height')
    let inputWeight=document.querySelector('#weight')
    let inputImc=document.querySelector('#imc')
    let btnRefer=document.querySelector('#btn-refer')
    let data=document.querySelectorAll('.person')

    btnRefer.addEventListener('click',(e)=>{
        let name=inputName.value
        let age=inputAge.value
        let weight=inputWeight.value
        let height=inputHeight.value
        let imc=(weight/(height*height)).toFixed(2)
             
        inputImc.value=imc

        const person={
            name: name,
            age: age,
            weight: weight,
            height: height,
            imc: imc
        }

        data[0].textContent=`Nome: ${person.name}`
        data[1].textContent=`Idade: ${person.age}`
        data[2].textContent=`Peso: ${person.weight}`
        data[3].textContent=`Altura: ${person.height}`
        data[4].textContent=`IMC: ${person.imc}`

        e.preventDefault()
    })


})