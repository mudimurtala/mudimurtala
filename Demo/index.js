function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.reportBook = function() {
        const readStatus = this.isRead ? "already read" : "not read yet";
        return (`The ${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`)
    }
};

const book1 = new Book("Hobbit", "J.R.R. Tolkien", 295, false);

console.log(book1.reportBook());

const myObject = {};
console.log(book1.__proto__)
console.log(myObject.__proto__); // This shows the prototype object