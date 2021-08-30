//check if the user is on inner-pages
let current = window.location.pathname;
let header = document.querySelectorAll(".header");
if ((current !== '/index.html') & (current !== '/ja-ja/index.html')) {
    for (let i=0; i < header.length; i++) {
        header.item(i).classList.add("page__header");
    }
}

//check if first or last journal article
let articlePrev = document.querySelector(".article__prev");
let articleNext = document.querySelector(".article__next");
if (current == '/en-en/journal/10.html') {
    articlePrev.classList.add("is-disabled");
} 
else if(current == '/en-en/journal/40.html') {
    articleNext.classList.add("is-disabled");
}