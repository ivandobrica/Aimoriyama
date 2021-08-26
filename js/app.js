//check if the user is on inner-pages
let current = window.location.pathname;
let header = document.querySelectorAll(".header");
if (current !== '/en-en/index.html') {
    for (let i=0; i < header.length; i++) {
        header.item(i).classList.add("page__header");
    }
}
