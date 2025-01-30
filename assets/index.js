window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  const loadMoreButton = document.getElementById("load-more-button");
  const cards = document.querySelectorAll("#hidden-card");
  let currentIndex = 0;

  loadMoreButton.addEventListener("click", function () {
    for (let i = 0; i < 4 && currentIndex < cards.length; i++) {
      cards[currentIndex].classList.remove("hidden");
      currentIndex++;
    }
    if (currentIndex >= cards.length) {
      loadMoreButton.style.display = "none";
    }
  });
});

// const cartButton = document
//   .getElementById("cart-button")
//   .addEventListener("click", function() );

document.querySelector("#cart-button").addEventListener("click", function () {
  const constButtom = document.querySelector("#cart-button");
  constButtom.innerHTML = `
                  <div class="relative z-100" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                    <div class="fixed inset-0 overflow-hidden">
                      <div class="absolute inset-0 overflow-hidden">
                        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                          <div class="pointer-events-auto w-screen max-w-md">
                            <div class="flex h-full flex-col overflow-y-scroll bg-gray-500 shadow-xl">
                              <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                <div class="flex items-start justify-between">
                                  <h2 class="text-lg font-medium text-white" id="slide-over-title">Carrito</h2>
                                  <div class="ml-3 flex h-7 items-center">
                                    <button type="button" class="relative -m-2 p-2 text-black hover:text-gray-500">
                                      <span class="absolute -inset-0.5"></span>
                                      <span class="sr-only">Close panel</span>
                                      <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                                <div class="mt-8">
                                  <div class="flow-root">
                                    <ul role="list" class="-my-6 divide-y divide-gray-200">
                                      <li class="flex py-6">
                                        <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                          <img src="https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="size-full object-cover">
                                        </div>
                                        <div class="ml-4 flex flex-1 flex-col">
                                          <div>
                                            <div class="flex justify-between text-base font-medium text-white">
                                              <h3>
                                                <a href="#">Throwback Hip Bag</a>
                                              </h3>
                                              <p class="ml-4">$90.00</p>
                                            </div>
                                            <p class="mt-1 text-sm text-white">Salmon</p>
                                          </div>
                                          <div class="flex flex-1 items-end justify-between text-sm">
                                            <p class="text-white">Qty 1</p>
                                            <div class="flex">
                                              <button type="button" class="font-medium text-red-600 hover:text-red-500">Remove</button>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li class="flex py-6">
                                        <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                          <img src="https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="size-full object-cover">
                                        </div>
                                        <div class="ml-4 flex flex-1 flex-col">
                                          <div>
                                            <div class="flex justify-between text-base font-medium text-white">
                                              <h3>
                                                <a href="#">Medium Stuff Satchel</a>
                                              </h3>
                                              <p class="ml-4">$32.00</p>
                                            </div>
                                            <p class="mt-1 text-sm text-white">Blue</p>
                                          </div>
                                          <div class="flex flex-1 items-end justify-between text-sm">
                                            <p class="text-white">Qty 1</p>
                                            <div class="flex">
                                              <button type="button" class="font-medium text-red-600 hover:text-red-500">Remove</button>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div class="flex justify-between text-base font-medium text-white">
                                  <p>Total</p>
                                  <p>$262.00</p>
                                </div>
                          
                                <div class="mt-6">
                                  <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-red-700">Comprar</a>
                                </div>
                                <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              `;
});
