import pizzaItemImg from './assets/pizzaItemImg.webp'
import colaItemImg from './assets/cola.webp'
import burgerItemImg from './assets/burgerItem.webp'

const menuData = {
  pizzaList: [
    {
      id: 0,
      title: 'Margharita',
      description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano',
      imageSrc: pizzaItemImg,
      imageAlt: 'Margharita',
      variant1: { size: '32cm', price: 25.5 },
      variant2: { size: '45cm', price: 32.5 },
    },
    {
      id: 2,
      title: 'Africana',
      description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano',
      imageSrc: pizzaItemImg,
      imageAlt: 'Africana',
      variant1: { size: '32cm', price: 26.5 },
      variant2: { size: '45cm', price: 33.5 },
    },
    {
      id: 3,
      title: 'Capricciosa',
      description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano',
      imageSrc: pizzaItemImg,
      imageAlt: 'Capricciosa',
      variant1: { size: '32cm', price: 27.5 },
      variant2: { size: '45cm', price: 34.5 },
    },
    {
      id: 4,
      title: 'Frutti di mare',
      description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano',
      imageSrc: pizzaItemImg,
      imageAlt: 'Frutti di mare',
      variant1: { size: '32cm', price: 30.0 },
      variant2: { size: '45cm', price: 37.0 },
    },
    {
      id: 5,
      title: 'Hawaii',
      description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano',
      imageSrc: pizzaItemImg,
      imageAlt: 'Hawaii',
      variant1: { size: '32cm', price: 27.5 },
      variant2: { size: '45cm', price: 27.5 },
    },
    {
      id: 6,
      title: 'Bolognese',
      description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano',
      imageSrc: pizzaItemImg,
      imageAlt: 'Bolognese',
      variant1: { size: '32cm', price: 29.5 },
      variant2: { size: '45cm', price: 29.5 },
    },
    {
      id: 7,
      title: 'Prosciutto ',
      description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano',
      imageSrc: pizzaItemImg,
      imageAlt: 'Prosciutto ',
      variant1: { size: '32cm', price: 27.5 },
      variant2: { size: '45cm', price: 27.5 },
    },
    {
      id: 8,
      title: 'Marinara',
      description: 'cheese, tomato, pizza sauce, ham, mushrooms, oregano',
      imageSrc: pizzaItemImg,
      imageAlt: 'Marinara',
      variant1: { size: '32cm', price: 25.5 },
      variant2: { size: '45cm', price: 25.5 },
    },
  ],

  drinkList: [
    {
      id: 0,
      title: 'Coca-Cola',
      description: 'classic coca cola 500 ml',
      imageSrc: colaItemImg,
      imageAlt: 'Coca-Cola',
      variant1: { size: '500ml', price: 6.2 },
    },

    {
      id: 1,
      title: 'Coca-Cola Zero',
      description: 'no sugar coca cola 500 ml',
      imageSrc: colaItemImg,
      imageAlt: 'Coca-Cola',
      variant1: { size: '500ml', price: 6.2 },
    },
    {
      id: 2,
      title: 'Cool Cola',
      description: 'very cool cola or something',
      imageSrc: colaItemImg,
      imageAlt: 'Coca-Cola',
      variant1: { size: '450ml', price: 7.2 },
    },
  ],

  burgerList: [
    {
      id: 0,
      title: 'Hamburger',
      description: 'Beef, Lettuce, Cheese, Pickle Slices, Onions',
      imageSrc: burgerItemImg,
      imageAlt: 'Hamburger',
      variant1: { size: 'Small', price: 11.2 },
      variant2: { size: 'Big', price: 17.5 },
    },
    {
      id: 1,
      title: 'Cheeseburger',
      description: 'Beef, Lettuce, Cheese x2, Pickle Slices, Onions',
      imageSrc: burgerItemImg,
      imageAlt: 'Hamburger',
      variant1: { size: 'Small', price: 12.5 },
      variant2: { size: 'Big', price: 19.0 },
    },
    {
      id: 2,
      title: 'Chicken Burger',
      description: 'Chicken, Lettuce, Cheese, Pickle Slices, Onions',
      imageSrc: burgerItemImg,
      imageAlt: 'Hamburger',
      variant1: { size: 'Small', price: 12.5 },
      variant2: { size: 'Big', price: 19.0 },
    },
  ],
}

export default menuData
