const myLibrary = [];

function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function displayBook () {
    const container = document.getElementById('bookcontainer');
    container.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++ ) {
        const book = myLibrary[i];
        const card = document.createElement('cards');

        card.innerHTML = `
        ${book.title}
        Author: ${book.author}
        Pages: ${book.pages}
        ID: ${book.id}
        `;

        container.appendChild(card);
    }
}

const dialog = document.getElementById('bookDialog');
const form = document.getElementById('bookForm');

document.addEventListener('click', event => {
    if (event.target.id === "newBookBtn") {
        dialog.showModal();
    }

    if (event.target.id === "closeDialog") {
        dialog.closest();
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');

    addBookToLibrary(title, author, pages);
    displayBook();

    form.reset();
    dialog.close();
});

addBookToLibrary("The Hobbit", "J.R.R Tolkein", "295 pages");
displayBook();