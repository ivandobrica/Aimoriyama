//check if the user is on journal page
let current = window.location.pathname;
let journal = document.querySelectorAll(".journal");
if (current == '/en-en/journal.html') {
    for (let i=0; i < journal.length; i++) {
        journal.item(i).classList.add("journal-page");
    }
}
