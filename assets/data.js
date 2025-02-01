const productsData = [
  {
    id: 1,
    name: "Ryzen 5600",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/products/disco-hdd.webp",
  },
  {
    id: 2,
    name: "Ryzen 5700",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/products/cooler.jpg",
  },
  {
    id: 3,
    name: "Ryzen 5600",
    precio: 1200220,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/products/memory.jpg",
  },
  {
    id: 4,
    name: "Ryzen 5600",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/ryzen-5600.jpg",
  },
  {
    id: 5,
    name: "Ryzen 5600",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/ryzen-5600.jpg",
  },
  {
    id: 6,
    name: "Ryzen 5600",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/ryzen-5600.jpg",
  },
  {
    id: 7,
    name: "Ryzen 5600",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/ryzen-5600.jpg",
  },
  {
    id: 8,
    name: "Ryzen 5600",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/ryzen-5600.jpg",
  },
  {
    id: 9,
    name: "Ryzen 5600",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/ryzen-5600.jpg",
  },
  {
    id: 10,
    name: "Ryzen 5600",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/ryzen-5600.jpg",
  },
  {
    id: 11,
    name: "Ryzen 5600",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/ryzen-5600.jpg",
  },
  {
    id: 12,
    name: "Ryzen 5600",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    // category: "hardware",
    cardImg: "assets/img/ryzen-5600.jpg",
  },
];

const divideProductsInParts = (size) => {
  let productList = [];

  for (let i = 0; i < productsData.length; i += size) {
    productList.push(productsData.slice(i, i + size));
  }
  return productList;
};

// console.log(divideProductsInParts(6));

// console.log(productsData.slice(0, 6));

const PRODUCTS_SIZE = 6;

const appState = {
  products: divideProductsInParts(PRODUCTS_SIZE),
  productsLimit: divideProductsInParts(PRODUCTS_SIZE).length,
  currentProductsIndex: 0,
};

console.log(appState);

// console.log(appState.productsLimit);
