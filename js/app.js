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

function changeBrandImages(){
    const darkModeBrandImages = ["../images/brands/ford-dark.svg","../images/brands/jeep-dark.svg","../images/brands/dodge-dark.svg","../images/brands/nissan-dark.svg","../images/brands/toyota-dark.svg","../images/brands/hyundai-dark.svg"];
    const lightModeBrandImages = ["../images/brands/ford.png","../images/brands/jeep.png","../images/brands/dodge.png","../images/brands/nissan.png","../images/brands/toyota.png","../images/brands/hyundai.png"];
    const brandImagesToRender = window.localStorage.getItem("theme") !== "dark" ? [...lightModeBrandImages] : [...darkModeBrandImages];
    const allBrands = document.querySelectorAll("#brandItem");
    console.log(allBrands);
    allBrands.forEach((brand,index) => {
        const brandImg = brand.querySelector("img");
        brandImg.src = brandImagesToRender[index];
        console.log(brandImg);
    })
}

function closeDialog(){
    loginDialog.close();
}

showPasswordBtn.addEventListener("mousedown", ()=>{
    passwordInput.type = "text";
});

showPasswordBtn.addEventListener("mouseup", ()=>{
    passwordInput.type = "password";
});

loginBtn.addEventListener("click",()=> {
    loginDialog.showModal();
});
closeDialogBtn.addEventListener("click", ()=>{
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
    setTimeout(()=>{
        changeBrandImages();
    },1000);
})