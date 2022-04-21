import pizzaItemImg from './assets/pizzaItemImg.jpg'
import colaItemImg from './assets/cola.jpg'
import burgerItemImg from './assets/burgerItem.jpg'

const menuData = {
    pizzaList: [
        {
            id: 0, title: 'Margharita', description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano', imageSrc: pizzaItemImg, imageAlt: 'Margharita',
            variant1: { size: '32cm', price: 25.50 },
            variant2: { size: '45cm', price: 32.50 },
        },
        {
            id: 2, title: 'Africana', description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano', imageSrc: pizzaItemImg, imageAlt: 'Africana',
            variant1: { size: '32cm', price: 26.50 },
            variant2: { size: '45cm', price: 33.50 },
        },
        {
            id: 3, title: 'Bolognese', description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano', imageSrc: pizzaItemImg, imageAlt: 'Bolognese',
            variant1: { size: '32cm', price: 27.50 },
            variant2: { size: '45cm', price: 34.50 },
        },

        {
            id: 4, title: 'Frutti di mare', description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano', imageSrc: pizzaItemImg, imageAlt: 'Frutti di mare',
            variant1: { size: '32cm', price: 30.00 },
            variant2: { size: '45cm', price: 37.00 },
        },
        {
            id: 5, title: 'Hawaii', description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano', imageSrc: pizzaItemImg, imageAlt: 'Hawaii',
            variant1: { size: '32cm', price: 27.50 },
            variant2: { size: '45cm', price: 27.50 },
        },
        {
            id: 6, title: 'Miesna w chuj', description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano', imageSrc: pizzaItemImg, imageAlt: 'Miesna w chuj',
            variant1: { size: '32cm', price: 29.50 },
            variant2: { size: '45cm', price: 29.50 },
        },
        {
            id: 7, title: 'Wiejska', description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano', imageSrc: pizzaItemImg, imageAlt: 'Wiejska',
            variant1: { size: '32cm', price: 27.50 },
            variant2: { size: '45cm', price: 27.50 },
        },
        {
            id: 8, title: 'boczek z pizza', description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano', imageSrc: pizzaItemImg, imageAlt: 'boczek z pizza',
            variant1: { size: '32cm', price: 25.50 },
            variant2: { size: '45cm', price: 25.50 },
        },
    ],

    drinkList: [
        {
            id: 0, title: 'Coca-Cola', description: 'classic coca cola 500 ml', imageSrc: colaItemImg, imageAlt: 'Coca-Cola',
            variant1: { size: '500ml', price: 6.20 },
        },

        {
            id: 1, title: 'Coca-Cola Zero', description: 'no sugar coca cola 500 ml', imageSrc: colaItemImg, imageAlt: 'Coca-Cola',
            variant1: { size: '500ml', price: 6.20 },
        },
        {
            id: 2, title: 'Orange juice', description: 'juice from real oragnes or something', imageSrc: colaItemImg, imageAlt: 'Coca-Cola',
            variant1: { size: '450ml', price: 7.20 },
        },
    ],

    burgerList: [
        {
            id: 0, title: 'Hamburger', description: 'Beef, Lettuce, Cheese, Pickle Slices, Onions', imageSrc: burgerItemImg, imageAlt: 'Hamburger',
            variant1: { size: 'Small', price: 11.20 },
            variant2: { size: 'Big', price: 17.50 },
        },
        {
            id: 1, title: 'Cheeseburger', description: 'Beef, Lettuce, Cheese x2, Pickle Slices, Onions', imageSrc: burgerItemImg, imageAlt: 'Hamburger',
            variant1: { size: 'Small', price: 12.50 },
            variant2: { size: 'Big', price: 19.00 },
        },
        {
            id: 2, title: 'Chicken Burger', description: 'Chicken, Lettuce, Cheese, Pickle Slices, Onions', imageSrc: burgerItemImg, imageAlt: 'Hamburger',
            variant1: { size: 'Small', price: 12.50 },
            variant2: { size: 'Big', price: 19.00 },
        }
    ]
}

export default menuData