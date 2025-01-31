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

document.getElementById("cart-button").addEventListener("click", function () {
  document.getElementById("cart-menu").classList.remove("hidden");
});

document.getElementById("button-close").addEventListener("click", function () {
  document.getElementById("cart-menu").classList.add("hidden");
});
