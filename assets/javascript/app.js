const slickSlide = document.querySelectorAll(".slick-slide");
const btnNext = document.querySelector(".slider__next");
const btnPrev = document.querySelector(".slider__prev");
const wrapProduct = document.querySelector(".wrap__product");
const listItems = [];

console.log(wrapProduct);

let slideIndex = 0;

showSlide(slideIndex);
autoShowSlide();
headerRightAction();
actionWithNavMobile();

async function getShoes() {
  const res = await fetch(
    "https://api.vuahanghieu.com/service/category/giay/products"
  );
  const results = await res.json();
  const listGiay = results.products.data;

  //Clear product
  wrapProduct.innerHTML = " ";

  listGiay.slice(0, 30).forEach((giay) => {
    const div = document.createElement("div");
    div.setAttribute("class", "product col l-4 m-6 c-6");
    listItems.push(div);
    div.innerHTML = `
        <img src=${giay.imageM} alt="">
                            <div class="product__name">
                                ${giay.name.slice(0,30)}
                            </div>
                            <div class="price">
                            <div class="product__const">
                              ${giay.originPriceShow}
                            </div>
                            <div class="product__price">
                              ${giay.priceShow}
                            </div>
                            </div>
                            `;
    wrapProduct.appendChild(div);
  });
}

getShoes();

btnNext.addEventListener("click", () => {
  plussSlide(1);
});
btnPrev.addEventListener("click", () => {
  plussSlide(-1);
});

function plussSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  let i;
  if (n > slickSlide.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slickSlide.length;
  }
  for (i = 0; i < slickSlide.length; i++) {
    slickSlide[i].style.display = "none";
  }
  slickSlide[slideIndex - 1].style.display = "block";
}

function autoShowSlide() {
  let i;
  for (i = 0; i < slickSlide.length; i++) {
    slickSlide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slickSlide.length) {
    slideIndex = 1;
  }
  slickSlide[slideIndex - 1].style.display = "block";
  setTimeout(autoShowSlide, 5000);
}
function headerRightAction() {
  const searchForm = document.querySelector(".searchPro");
  const btnSearch = document.querySelector(".header__search");
  const btnSearchClose = document.querySelector(".search-close");
  const cartForm = document.querySelector(".cartPro");
  const btnCart = document.querySelector(".header__cart");
  const author = document.querySelector(".authorPro");
  const btnAuthor = document.querySelector(".header__auth");
  const modal = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal__overlay");

  let value = 0;

  btnSearch.addEventListener("click", () => {
    cartForm.style = `animation: hide_cart 0.25s linear forwards;`;
    searchForm.classList.toggle("hide");
  });
  btnSearchClose.addEventListener("click", () => {
    searchForm.classList.add("hide");
  });

  btnCart.addEventListener("click", () => {
    cartForm.classList.remove("hide");
    value++;
    if (value % 2) {
      cartForm.style = `animation: show_cart 0.25s linear forwards;`;
    } else {
      cartForm.style = `animation: hide_cart 0.25s linear forwards;`;
    }
  });
  btnAuthor.addEventListener("click", () => {
    author.classList.toggle("hide");
    modal.classList.toggle("hide");
    modalOverlay.classList.toggle("hide");
  });
  modalOverlay.addEventListener("click", () => {
    modalOverlay.classList.add("hide");
    modal.classList.toggle("hide");
    author.classList.add("hide");
  });
}

const x = document.getElementById("login");
const y = document.getElementById("Register");
const z = document.getElementById("btn");

function register() {
  x.style.left = "-300px";
  y.style.left = "50px";
  z.style.left = "110px";
  y.style.opacity = "1";
  x.style.opacity = "0";
}
function login() {
  x.style.left = "50px";
  y.style.left = "400px";
  z.style.left = "0";
  y.style.opacity = "0";
  x.style.opacity = "1";
}

function actionWithNavMobile() {
  const btnOpenMenuMobile = document.querySelector(".nav__bar-mobile");
  const menuMobile = document.querySelector(".modal-mobile");
  const btnClose = document.querySelector(".nav__mobile-close");
  const menuMobileOverlay = document.querySelector(".modal__overlay-mobile");

  btnClose.addEventListener("click", () => {
    menuMobile.classList.add("hide");
  });
  btnOpenMenuMobile.addEventListener("click", () => {
    menuMobile.classList.remove("hide");
  });
  menuMobileOverlay.addEventListener("click", () => {
    menuMobile.classList.add("hide");
  });
}
