const value = document.getElementById('value')
const plustButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

const updateValue = () => { // função para atualizar o valor em tela
    value.innerHTML = count;
}

let count = 10;

let intervalId = 0; // utilizado para fazer o intervalo entre o envento do click , para quando segurar o botão adicionar mais de 1 ao contador 


// Criando a função para poder fazer o click adicionar mais de 1 ao contador 
plustButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => { // função para setar o tempo do click 
        count += 1;
        console.log(count)
        updateValue()
    },100 /* tempo em milezimos */)
})

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => { // função para setar o tempo do click 
        count -= 1;
        updateValue()
    },100 /* tempo em milezimos */)
})

document.addEventListener('mouseup' ,() => clearInterval(intervalId)) // função para linpar os evento, para o contador não ficar adicionado numeros para sempre


resetButton.addEventListener('click', () => {
    count = 0;
    updateValue()
})