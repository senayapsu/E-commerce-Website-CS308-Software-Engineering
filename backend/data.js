import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name:'Basir',
      email:'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name:'John',
      email:'user@example.com',
      password: bcrypt.hashSync('1238', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        description: 'high quality product',
        price: 120,
        image: '/images/p1.jpg',
      },
    ],
  };
  export default data;