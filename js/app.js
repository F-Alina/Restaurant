let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
  body.classList.add('active');
});

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Мікс з мідіями',
        image: '1.png',
        price: 139000

    },
    {
        id: 2,
        name: 'Кватроформаджі',
        image: '2.png',
        price: 159000

    },
    {
        id: 3,
        name: 'Філа Тропікано',
        image: '3.png',
        price: 169000

    },
    {
        id: 4,
        name: 'Формаджо піколете',
        image: '4.png',
        price: 139000

    },
    {
        id: 5,
        name: 'Локшина з качкою',
        image: '5.png',
        price: 139000

    },
    {
        id: 6,
        name: 'Чизкейк',
        image: '6.png',
        price: 99000

    },
];

let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">ЗАМОВИТИ</button>
        `;
    
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key]== null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();

}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}