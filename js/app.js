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


if (currentTheme === "dark") document.body.classList.add("dark");

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
    document.body.classList.add("overlay");
    navigation.classList.add("open");
});
closeNavBtn.addEventListener("click", () => {
    document.body.classList.remove("overlay");
    navigation.classList.remove("open");
});
themeToggler.addEventListener("click", () => {
    console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.remove("dark");
        localStorage.removeItem("theme");
        return
    };
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
})