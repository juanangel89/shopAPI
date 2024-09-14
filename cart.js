
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const numberInput = document.getElementById('numberInput');
const btnGet = document.getElementById('btn-get').addEventListener('click', ()=>{
    let myCart = localStorage.getItem('cartSebas')
    console.log(JSON.parse(myCart))
    
})
// Evento para incrementar el valor
incrementButton.addEventListener('click', () => {
    let currentValue = parseInt(numberInput.value); // Obtener el valor actual y convertirlo a número
    numberInput.value = currentValue + 1; // Incrementar el valor en 1
});
// Evento para decrementar el valor
decrementButton.addEventListener('click', () => {
    let currentValue = parseInt(numberInput.value); // Obtener el valor actual y convertirlo a número
    if (numberInput.value === 0) {
        //falta hacer el bloqueo del boton de menos
    }
    numberInput.value = currentValue - 1; // Decrementar el valor en 1
});

// export const talcosa = () => {
//     return 'hola'
// }