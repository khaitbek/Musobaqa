const hamburgerBtn = document.querySelector("#hamburgerBtn");
const closeNavBtn = document.querySelector("#closeNav");
const navigation = document.querySelector("#navigation");
const themeToggler = document.querySelector("#themeToggler");
const currentTheme = localStorage.getItem("theme");
const loginBtn = document.querySelector("#loginBtn");
const loginDialog = document.querySelector("#loginDialog");
const closeDialogBtn = document.querySelector("#closeDialog");
const passwordInput = document.querySelector("#userPassword");
const showPasswordBtn = document.querySelector("#showPasswordBtn");
const overlay = document.querySelector("#overlay");


if (currentTheme === "dark") {
    document.body.classList.add("dark");
    changeBrandImages();
};

function changeBrandImages() {
    const darkModeBrandImages = ["../images/brands/ford-dark.svg", "../images/brands/jeep-dark.svg", "../images/brands/dodge-dark.svg", "../images/brands/nissan-dark.svg", "../images/brands/toyota-dark.svg", "../images/brands/hyundai-dark.svg"];
    const lightModeBrandImages = ["../images/brands/ford.png", "../images/brands/jeep.png", "../images/brands/dodge.png", "../images/brands/nissan.png", "../images/brands/toyota.png", "../images/brands/hyundai.png"];
    const brandImagesToRender = window.localStorage.getItem("theme") !== "dark" ? [...lightModeBrandImages] : [...darkModeBrandImages];
    const allBrands = document.querySelectorAll(".brandItem");
    console.log(allBrands);
    allBrands.forEach((brand, index) => {
        const brandImg = brand.querySelector("img");
        brandImg.src = brandImagesToRender[index];
        console.log(brandImg);
    })
}

function closeDialog() {
    loginDialog.close();
}

showPasswordBtn.addEventListener("mousedown", () => {
    passwordInput.type = "text";
});

showPasswordBtn.addEventListener("mouseup", () => {
    passwordInput.type = "password";
});

loginBtn.addEventListener("click", () => {
    loginDialog.showModal();
});
closeDialogBtn.addEventListener("click", () => {
    closeDialog();
})
hamburgerBtn.addEventListener("click", () => {
    overlay.classList.add("show");
    navigation.classList.add("open");
});
closeNavBtn.addEventListener("click", () => {
    overlay.classList.remove("show");

    navigation.classList.remove("open");
});
themeToggler.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.remove("dark");
        localStorage.removeItem("theme");
        changeBrandImages();
        return
    };
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
    setTimeout(() => {
        changeBrandImages();
    }, 1000);
});

const elTabLink = document.querySelectorAll(".choose-car__top-link");
const elTabItem = document.querySelectorAll(".choose-car__top-item");
const elPanelItem = document.querySelectorAll(".choose-car__bottom-item");


elTabLink.forEach(function (link) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();

        elTabItem.forEach(function (item) {
            item.classList.remove("choose-car__top-item--active");
        });

        link.parentElement.classList.add("choose-car__top-item--active");

        elPanelItem.forEach(function (panel) {
            panel.classList.remove("choose-car__bottom-item--active");
        });

        document.querySelector(link.getAttribute("href")).classList.add("choose-car__bottom-item--active");
    });
});

$('.carousel__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.card__list').slick({
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ],
    dotsClass: "slick-dots-mansur",
    customPaging: (slider, i) => {
        return "<button class='slick-dot-mansur' type='button'> </button>"
    }

});

$('.card__list').on("afterChange", function () {
    const dots = document.querySelectorAll(".slick-dot-mansur");
    const cards = document.querySelectorAll(".card__item");
    cards.forEach((card, index) => {
        if (card.classList.contains("slick-current")) {
            dots.forEach(dot => {
                dot.classList.remove("active-dot");
            })
            if (index >= dots.length) {
                dots[index - dots.length + 1].classList.add("active-dot");
                return
            }
            dots[index].classList.add("active-dot");
        }
    })
})

  // $('.card__list').slick({
  //   slidesToShow: 3.7,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });