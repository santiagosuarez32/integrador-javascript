const showMoreBtn = document.querySelector(".load-button");
const productsContainer = document.querySelector(".products-container");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const cartBtn = document.querySelector(".cart-button");
const productsCart = document.querySelector(".cart-container");
const closeBtn = document.querySelector(".close-btn");
/* Carrito Desktop */
const cartMenu = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");
/* Menu burguer mobile */
const menuBtn = document.querySelector(".cart-button2");
const hambMenu = document.querySelector(".open-hamb");
const menu = document.querySelector(".hamb-menu");

const createProductTemplate = (product) => {
  const { id, name, precio, category, descripcion, cardImg } = product;
  return `<div class="bg-white rounded-xl p-4 cursor-pointer hover:-translate-y-1 transition-all relative product">    
          <div class="mb-4 bg-gray-100 rounded p-2">
          <img src="${cardImg}" alt="${name}" class="aspect-[33/35] w-full object-contain" />
          </div>
          <div>
            <div class="flex gap-2">
              <h5 class="text-base font-bold text-gray-800">${name}</h5>
              <h6 class="text-base text-gray-800 font-bold ml-auto">${precio}</h6>
            </div>
            <p class="text-gray-500 text-[13px] mt-2">${descripcion}</p>
            <div class="flex items-center gap-2 mt-4">
             
            <button type="button" class="text-sm px-2 h-9 font-semibold w-full bg-red-600 hover:bg-red-700 text-white tracking-wide ml-auto outline-none border-none rounded">Agregar</button>
          </div>
        </div>
      </div>`;
};

const renderProducts = (products) => {
  productsContainer.innerHTML += products.map(createProductTemplate).join("");
};

const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  let { products, currentProductsIndex, productsLimit } = appState;

  renderProducts(products[currentProductsIndex]);

  if (currentProductsIndex === productsLimit - 1) {
    showMoreBtn.classList.add("hidden");
  }
};

const applyFilter = (e) => {
  if (!isInactiveFilterBtn(e.target)) return;
  changeFilterState(e.target);
  productsContainer.innerHTML = "";

  if (appState.activeFilter) {
    const filteredProducts = productsData.filter(
      (product) => product.category === appState.activeFilter
    );
    renderProducts(filteredProducts);
    appState.currentProductsIndex = 0;
    return;
  }

  renderProducts(appState.products[0]);
};

const changeBtnActiveState = (activeFilter) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== activeFilter) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
    return;
  }
  showMoreBtn.classList.add("hidden");
};

const closeCart = () => {
  cartMenu.classList.add("hidden");
};

const addCart = () => {
  cartMenu.classList.remove("hidden");
};

const addCartMobile = () => {
  cartMenu.classList.remove("hidden");
};

// const closeCartMobile = () => {
//   cartMenu.classList.add("hidden");
// };

const openMenuHamb = () => {
  menu.classList.toggle("hidden");
};

const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);

  cartBtn.addEventListener("click", addCart);
  closeBtn.addEventListener("click", closeCart);
  menuBtn.addEventListener("click", addCartMobile);
  // closeBtn.addEventListener("click", closeCartMobile);
  hambMenu.addEventListener("click", openMenuHamb);
};

init();

/* <ul role="list" class="-my-6 divide-y divide-gray-200">
                    <!-- Aquí van los elementos del carrito -->
                    <ul role="list" class="-my-6 divide-y divide-gray-200">
                      <li class="flex py-6">
                        <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img src="" alt="" class="size-full object-cover">
                        </div>
                        <div class="ml-4 flex flex-1 flex-col">
                          <div>
                            <div class="flex justify-between text-base font-medium text-white">
                              <h3>
                                <a href="#"></a>
                              </h3>
                              <p class="ml-4"></p>
                            </div>
                            <p class="mt-1 text-sm text-white"></p>
                          </div>
                          <div class="flex flex-1 items-end justify-between text-sm">
                            <p class="text-white"></p>
                            <div class="flex">
                              <button type="button" class="font-medium text-red-600 hover:text-red-500">Remove</button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="flex py-6">
                        <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img src="" alt="" class="size-full object-cover">
                        </div>
                        <div class="ml-4 flex flex-1 flex-col">
                          <div>
                            <div class="flex justify-between text-base font-medium text-white">
                              <h3>
                                <a href="#"></a>
                              </h3>
                              <p class="ml-4"></p>
                            </div>
                            <p class="mt-1 text-sm text-white"></p>
                          </div>
                          <div class="flex flex-1 items-end justify-between text-sm">
                            <p class="text-white"></p>
                            <div class="flex">
                              <button type="button" class="font-medium text-red-600 hover:text-red-500">Remove</button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul> */
