const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Cookies" },
    { name: "Cakes" },
    { name: "Donuts" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Sugar Cookies",
      image: "sugar cook.png",
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
      Category: "Cookies",
    },
    {
      name: "Snickerdoodle Cookies",
      image: "vanilla cook.png",
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
      Category: "Cookies",
    },
    {
      name: "Chocolate Chip Cookies",
      image: "choc cook.png",
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
      Category: "Cookies",
    },
    {
      name: "Chocolate Cake",
      category: categories[1]._id,
      image: "choc cake.png",
      price: 3.99,
      quantity: 100,
      Category: "Cake",
    },
    {
      name: "Red Velvet Cake",
      category: categories[1]._id,
      image: "red cake.png",
      price: 3.99,
      quantity: 100,
      Category: "Cake",
    },
    {
      name: "Lemon Poppy Seed Cake",
      category: categories[1]._id,
      image: "yellow cake.png",
      price: 3.99,
      quantity: 100,
      Category: "Cake",
    },
    {
      name: "Blueberry Swirl Donut",
      category: categories[2]._id,
      image: "blue donut.jpeg",
      price: 2.99,
      quantity: 100,
      Category: "Donut",
    },
    {
      name: "Chocolate Sprinkle Donut",
      category: categories[2]._id,
      image: "choc donut.jpeg",
      price: 2.99,
      quantity: 100,
      Category: "Donut",
    },
    {
      name: "Pink Sprinkle Donut",
      category: categories[2]._id,
      image: "pink donut.jpeg",
      price: 2.99,
      quantity: 100,
      Category: "Donut",
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    email: "testA@gmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    email: "testB@gmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
