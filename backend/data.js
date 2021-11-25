import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ashfaque',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'AshuUser',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Dark Fantasy Choco Fills',
      category: 'Cookies',
      image: '/images/p1.jpg',
      price: 110,
      brand: 'Dark Fantasy',
      description: 'Hand made Biscuits',
    },

    {
      name: 'Sunfeast Dark Fantasy Coffee Fills',
      category: 'Cookies',
      image: '/images/p2.jpg',
      price: 27,
      brand: 'Dark Fantasy',
      description: 'Hand made Biscuits',
    },

    {
      name: 'Ashirvaad Atta with Multigrains, 5kg',
      category: 'Aata',
      image: '/images/p3.jpg',
      price: 291,
      brand: 'Aashirvaad',
      description: 'Made with the choicest grains',
    },

    {
      name: 'Aashirvadd Glutten Free Flour Pouch',
      category: 'Cookies',
      image: '/images/p4.jpg',
      price: 369,
      brand: 'Vedaka',
      description: 'Finest Aata Hand Made',
    },

    {
      name: 'Thums Up Soft Drink, 750ml Bottle',
      category: 'Soft Drinks',
      image: '/images/p5.jpg',
      price: 34,
      brand: 'Thums Up',
      description: 'Soft Drinks To Enjoy during cricket season',
    },

    {
      name: 'Thums Up Soft Drink, 1.25L Bottle',
      category: 'Soft Drinks',
      image: '/images/p6.jpg',
      price: 86,
      brand: 'Thums Up',
      description: 'Soft Drinks To Enjoy during cricket season',
    },

    {
      name: 'DiSano Peanut Butter,Non GMO, 1kg',
      category: 'Butter',
      image: '/images/p7.jpg',
      price: 269,
      brand: 'DiSano',
      description: 'Hand Made Butter',
    },

    {
      name: 'Dabur Honey 100 % Pure World No.1',
      category: 'Butter',
      image: '/images/p8.jpg',
      price: 178,
      brand: 'Dabur',
      description:
        'Dabur Honey: 100% Pure worlds No1 Honey Brand with No Sugar Adulteration',
    },
    
  ],
};

export default data;
