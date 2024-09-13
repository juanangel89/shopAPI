url ='https://fakestoreapi.com/products'

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
}

