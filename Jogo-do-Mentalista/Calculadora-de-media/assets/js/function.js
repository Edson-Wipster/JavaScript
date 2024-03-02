    const testing1=document.querySelector('#testing1')
    const testing2=document.querySelector('#testing2')
    const btnResult=document.querySelector('#btn-result')
    const result=document.querySelector('#result')
    const state=document.querySelector('#state')
    const alert=document.querySelector('#alert')
    const form=document.querySelector('form')
    const btnReset=document.querySelector('#btn-reset')

    function validar(numero){
        let num1=testing1.value
        let num2=testing2.value
        if(num1<0 || num1>10 || num2<0 || num2>10){
            form.reset()
            alert.textContent='Digite uma nota entre 0 e 10'
            alert.classList.add('alert')
            setTimeout(()=>{
                alert.classList.remove('alert')
                alert.textContent=''
            },2000)
        }
    }
    function stateColor(text){
        console.log(text)
        switch (text) {
            case 'Aprovado':
                state.classList.remove('reprovado')
                state.classList.remove('recupecao')
                state.classList.add('aprovado')
                break;
            case 'Reprovado':
                state.classList.remove('aprovado')
                state.classList.remove('recupecao')
                state.classList.add('reprovado')
                break;
            case 'Recurso':
                state.classList.remove('aprovado')
                state.classList.remove('reprovado')
                state.classList.add('recupecao')
                break;
        
            default:
                state.textContent='Situacao Final'
        }
    }

    function stateResult(med){
        let state=''
        if(med>7){
            state='Aprovado'
        }else if(med>=5){
            state='Recurso'
        }else{
            state='Reprovado'
        }
        return state
    }
    function Media(nota1, nota2) {
        return ((nota1+nota2)/2).toFixed(1)
    }
    
    btnReset.addEventListener('click',()=>{
        state.classList.remove('aprovado')
        state.classList.remove('reprovado')
        state.classList.remove('recupecao')
    })

    btnResult.addEventListener('click',(e)=>{
        const note1=Number(testing1.value)
        const note2=Number(testing2.value)

        const media=Media(note1, note2)
        result.value=media

        state.value=stateResult(media)
        
        stateColor(stateResult(media))

        e.preventDefault()
    })

   
