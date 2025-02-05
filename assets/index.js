const showMoreBtn = document.querySelector(".load-button");
const productsContainer = document.querySelector(".products-container");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");

// console.log(categoriesList);

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
  // console.log(appState.products[appState.currentProductsIndex]);
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
  // console.log(appState.activeFilter);
};

const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);
};

init();
