
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const numberInput = document.getElementById('numberInput');
const carts = document.getElementById('carts');
const total =document.getElementById('total');
let cantidad = 0;
let totalConvertido =0;


const btnClear = document.getElementById('btn-clear').addEventListener('click', ()=>{
    console.log('carrito borrado');
    
    localStorage.clear();
    location.reload();
    
})

// const btnGet = document.getElementById('btn-get').addEventListener('click', ()=>{
//     console.log('carrito inciado');
    
//     cartStore()
    
// })

const showTotal = ()=>{
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(product=>{
        cantidad = cantidad+(product.price*product.cant)
            console.log(cantidad);
            
        total.textContent= `total: $${cantidad.toFixed(2)}`
    })
}
showTotal();

const cartStore = ()=>{
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // itera sobre los productos del carrito y mostrarlos
cart.forEach(product => {
    console.log(`Product ID: ${product.id}, Price: ${product.price}`);
    
    const cardCart = document.createElement('div')
    cardCart.classList.add('cart')

    const imgProduct = document.createElement('img')
    imgProduct.src=product.image
    imgProduct.alt=product.title

    const nameCard = document.createElement('h2')
    nameCard.textContent = product.title

    const cardCant = document.createElement('div')
    cardCant.classList.add('btnsCant')

    const decrement = document.createElement('button')
    decrement.textContent='-'
    decrement.id='decrement'
    
    // Evento para decrementar el valor
    decrement.addEventListener('click', () => {
        let currentValue = parseInt(inputCant.value); // Obtener el valor actual y convertirlo a número
        if (inputCant.value == 1) {
            decrement.disabled = true;
        } else {
            inputCant.value = currentValue - 1; // Decrementar el valor en 1
            product.cant= parseInt(inputCant.value);
            
        }
        localStorage.setItem('cart', JSON.stringify(cart));        
        priceCard.textContent = 'subtotal: $'+product.price*inputCant.value
        location.reload();
    });

    const inputCant = document.createElement('input')
    inputCant.type='text'
    inputCant.id=product.id
    inputCant.value=product.cant

    const priceCard = document.createElement('p')
    let subtotal = product.price*inputCant.value 
    priceCard.textContent = 'subtotal: $'+ subtotal.toFixed(2)
    if (inputCant.value == 1) {
        decrement.disabled = true;
    }

    const increment = document.createElement('button')
    increment.textContent='+'   
    increment.id='increment'
    // Evento para incrementar el valor
    increment.addEventListener('click', () => {
        let currentValue = parseInt(inputCant.value); // Obtener el valor actual y convertirlo a número
        if (inputCant.value >= 1) {
            decrement.disabled = false;
            inputCant.value = currentValue + 1;
            product.cant= parseInt(inputCant.value);
        } else{
            inputCant.value = currentValue + 1;
            product.cant= inputCant.value;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        priceCard.textContent = 'subtotal: $'+product.price*inputCant.value
        location.reload();
    });

    const clearProduct = document.createElement('button')
    clearProduct.textContent='X'
    clearProduct.id='clear'
    // Evento para borrar el producto
    clearProduct.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== product.id);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    });

    cardCart.appendChild(imgProduct)
    cardCart.appendChild(nameCard)
    cardCart.appendChild(priceCard)
    cardCart.appendChild(cardCant)

    cardCant.appendChild(decrement)
    cardCant.appendChild(inputCant)
    cardCant.appendChild(increment)

    cardCart.appendChild(clearProduct)

    carts.appendChild(cardCart)

});
}
cartStore();

