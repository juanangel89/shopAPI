url ='https://fakestoreapi.com/products'
let cart = []
let cant =1

const products = document.getElementById('products')

const getProduct = async (URL) => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data[0].name);
    data.forEach(element => {
        console.log(element.name);
        console.log(element.image);
        makeProduct (element) 
    });
}
getProduct(url);

const makeProduct = (product) => {
    const card = document.createElement('div')
    card.classList.add('product')

    const imgCard = document.createElement('div')
    imgCard.classList.add('img')

    const imgProduct = document.createElement('img')
    imgProduct.src=product.image
    imgProduct.alt=product.title
    
    const cardContent = document.createElement('div')
    cardContent.classList.add('description')
    
    const nameCard = document.createElement('h2')
    nameCard.textContent = product.title

    const descriptionCard = document.createElement('p')
    descriptionCard.classList.add('descrip')
    descriptionCard.textContent = product.description

    const priceCard = document.createElement('p')
    priceCard.textContent = '$'+product.price

    const btnCard=document.createElement('button')
    btnCard.textContent='Añadir'
    btnCard.classList.add('btnCart')
    btnCard.id=product.id
    
    const iconBtn=document.createElement('i')
    iconBtn.classList.add('bx')
    iconBtn.classList.add('bxs-cart-add')

    card.appendChild(imgCard)
    imgCard.appendChild(imgProduct)
    card.appendChild(cardContent)

    cardContent.appendChild(nameCard)
    imgCard.appendChild(descriptionCard)
    cardContent.appendChild(priceCard)
    cardContent.appendChild(btnCard)
    btnCard.appendChild(iconBtn)

    products.appendChild(card)

    btnCard.addEventListener ('click',(event)=> {
        console.log(`${product.id} + ${product.price}`);
        let currentProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            cant: cant
        }

        console.log(currentProduct);
        cart = JSON.parse(localStorage.getItem('cart')) || []; // Recupera el carrito actual del localStorage
        let existingProduct = cart.find(item => item.id === currentProduct.id);
        if (existingProduct) {
            // Si el producto ya existe, suma el precio
            existingProduct.cant += currentProduct.cant;
            console.log('producto sumado');
        } else {
            // Si no existe, lo agregas al carrito
            cart.push(currentProduct);
            console.log('producto nuevo agregado');
        }
        localStorage.setItem('cart', JSON.stringify(cart)); // Guarda el carrito actualizado en el localStorage
    })
}


