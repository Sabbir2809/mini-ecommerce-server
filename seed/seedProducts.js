const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Product = require("../models/Product");

dotenv.config();
connectDB();

const dummyProducts = [
  {
    title: "Men's Polo Shirt",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    description: "Classic fit polo shirt with ribbed collar and sleeve cuffs.",
    price: 27,
    category: "Clothing",
    brand: "Lacoste",
    stock: 75,
    rating: 4.6,
  },
  {
    title: "Women's Casual Top",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    description: "Short sleeve crewneck cotton blend top. Great for daily use.",
    price: 22,
    category: "Clothing",
    brand: "Old Navy",
    stock: 60,
    rating: 3,
  },
  {
    title: "Men's Formal Shirt",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    description:
      "Elegant formal shirt for office or event wear. Slim fit design.",
    price: 30,
    category: "Clothing",
    brand: "Arrow",
    stock: 90,
    rating: 2,
  },
  {
    title: "Slim Fit Denim Jeans",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    description:
      "Classic slim-fit jeans in dark blue wash. Durable and stylish.",
    price: 35,
    category: "Clothing",
    brand: "Levi's",
    stock: 80,
    rating: 4.6,
  },
  {
    title: "Women's Cardigan",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    description: "Open front long sleeve cardigan in soft knit fabric.",
    price: 32,
    category: "Clothing",
    brand: "H&M",
    stock: 55,
    rating: 5,
  },
  {
    title: "Women's Cotton Jacket",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    description:
      "Stylish and warm cotton jacket, perfect for spring and autumn.",
    price: 45,
    category: "Clothing",
    brand: "Zara",
    stock: 50,
    rating: 4,
  },
  {
    title: "Men's Casual T-Shirt",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    description:
      "100% cotton, lightweight, breathable casual t-shirt for daily wear.",
    price: 20,
    category: "Clothing",
    brand: "H&M",
    stock: 100,
    rating: 3,
  },
  {
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    brand: "Acer",
    stock: 100,
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: 4,
  },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(dummyProducts);
    console.log("✅ Dummy products inserted");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding error:", err.message);
    process.exit(1);
  }
};

seedProducts();
