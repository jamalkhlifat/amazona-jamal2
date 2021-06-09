import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Jamal',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
          isSeller: true,
            seller: {
            name: 'Puma',
            logo: '/images/logo1.png',
            description: 'best seller',
            rating: 4.5,
            numReviews: 120,
      },
        },
        {
          name: 'Sanaa',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],


    products:[
        {
            name: 'Nike Slim Shirts',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 60,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',

        },
        {
            name: 'Adidas Fit Shirts',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 70,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',

        },
        {
            name: 'Lcoste free Shirts',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 90,
            countInStock: 0,
            brand: 'Lcoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',

        },
        {
            name: 'Nike Slim Pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 50,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',

        },
        {
            name: 'Puma Slim Pants',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 40,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',

        },
        { 
            name: 'Addida Slim Pants',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 100,
            countInStock: 12,
            brand: 'Addida',
            rating: 4.7,
            numReviews: 10,
            description: 'high quality product',

        },
    ],
};
export default data;