const productsData = [
  {
    id: 1,
    name: "Auriculares",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "software",
    cardImg: "assets/img/products/auriculares.webp",
  },
  {
    id: 2,
    name: "Cooler CPU",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "hardware",
    cardImg: "assets/img/products/cooler.jpg",
  },
  {
    id: 3,
    name: "Disco HDD",
    precio: 1200220,
    descripcion: "Componente hardware gaming",
    category: "hardware",
    cardImg: "assets/img/products/disco-hdd.webp",
  },
  {
    id: 4,
    name: "Disco SSD",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "hardware",
    cardImg: "assets/img/products/disco-ssd.jpg",
  },
  {
    id: 5,
    name: "Fuente de Poder",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "hardware",
    cardImg: "assets/img/products/fuente-de-poder.webp",
  },
  {
    id: 6,
    name: "Intel I13",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "hardware",
    cardImg: "assets/img/products/intel.webp",
  },
  {
    id: 7,
    name: "Gabinete",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "software",
    cardImg: "assets/img/products/gabinete.jpg",
  },
  {
    id: 8,
    name: "Memoria Ram",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "hardware",
    cardImg: "assets/img/products/memory.jpg",
  },
  {
    id: 9,
    name: "Monitor",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "software",
    cardImg: "assets/img/products/monitor.webp",
  },
  {
    id: 10,
    name: "Mouse",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "software",
    cardImg: "assets/img/products/mouse.jpeg",
  },
  {
    id: 11,
    name: "Placa madre",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "software",
    cardImg: "assets/img/products/placa-madre.jpg",
  },
  {
    id: 12,
    name: "Refrigeracion Liquida",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "software",
    cardImg: "assets/img/products/refrigeracion.jpg",
  },
  {
    id: 13,
    name: "RTX 3050",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "hardware",
    cardImg: "assets/img/products/rtx-3050.png",
  },
  {
    id: 14,
    name: "Tarjeta de video",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "hardware",
    cardImg: "assets/img/products/tarjeta-de-video.jpg",
  },
  {
    id: 15,
    name: "Teclado Mecanico",
    precio: 12000,
    descripcion: "Componente hardware gaming",
    category: "software",
    cardImg: "assets/img/products/teclado-mecanico.webp",
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
