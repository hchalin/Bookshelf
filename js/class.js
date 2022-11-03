class Book {
  constructor(author, language, subject, title, favorite) {
    this.title = title;
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.favorite = false;
  }

  render() {
    let bookWrapper = document.createElement("li");
    bookWrapper.classList.add("bookWrapper");
    let bookTitle = document.createElement("h1");
    bookTitle.textContent = `${this.title} by: ${this.author}`;
    let subjectHeader = document.createElement("h2");
    let listOfSubjects = document.createElement("ol");
    //loop through all subjects and append each one
    for (let i = 0; i < this.subject.length; i++) {
      let subjects = this.subject[i];
      subjectHeader.textContent = `Subjects`;
      listOfSubjects.append(subjectHeader);
      let aSubject = document.createElement("li");
      aSubject.textContent = subjects;
      listOfSubjects.append(aSubject);
    }

    bookWrapper.append(bookTitle, subjectHeader, listOfSubjects);
    return bookWrapper;
  }
}
//============================================
class Bookshelf {
  constructor() {
    this.bookShelf = [];
    this.favoritesList = []; // adds a favorites list
  }

  addBook(newBook) {
    // console.log("yo");
    this.bookShelf.unshift(newBook);
  }

  addToFavorites(book) {
    // adds bood to favorites list...
    this.favoritesList.push(book);
    console.log(this.favoritesList);
  }

  removeFromFavorites(book) {
    this.favoritesList.pop(book);
    console.log(this.favoritesList);
  }

  pushBooks(arrayOfBooks) {
    //bookData
    let anArray = [];
    for (let book of arrayOfBooks) {
      let bookInstance = new Book(
        book.author,
        book.language,
        book.subject,
        book.title
      );
      anArray.push(bookInstance);
      // console.log(book.subject)
    }
    this.bookShelf = anArray;

    return this.bookShelf;
  }
  render() {
    // let numOfBooks = 0;
    let bookCounter = document.querySelector("#allBookCounter");
    let totalBooks = this.bookShelf.reduce((acc, curr) => acc + 1, 0);
    let totalFavorites = this.favoritesList.reduce((acc, curr) => acc + 1, 0);
    bookCounter.innerHTML = `<span>There are ${totalBooks} total books <br> 
      There are ${totalFavorites} favorite books</span>`;

    let body = document.querySelector("#bookShelf");
    body.innerHTML = ""; // this resets the page when called
    let bookshelfWrapper = document.createElement("ul");

    // use map array method
    this.bookShelf.map((book) => {
      // creates fave btn and adds event listener=======
      let favoriteButton = document.createElement("button");
      favoriteButton.innerHTML = `Favorite`;
      favoriteButton.classList.add("favBtn");
      favoriteButton.addEventListener("click", (e) => {
        // only one copy of the book can be added
        if (!this.favoritesList.includes(book)) {
          book.favorite = true;

          console.log(`${book.title} has been added to favorites`);
          this.addToFavorites(book);
          favoriteButton.style.color = "red";
          // newBookShelf.favoritesRender()
        } else if (this.favoritesList.includes(book)) {
          // rms book from list and changes style
          console.log(`${book.title} removed from favorites`);
          this.removeFromFavorites(book);
          favoriteButton.style.color = "black";
        }
      }); //  ==============================================
      // create comment btn and adds event listener ========
      let commentButton = document.createElement("button");
      commentButton.innerHTML = `Add Comment`;
      commentButton.classList.add("commBtn");
      const testBox = document.createElement("div");
      commentButton.addEventListener("click", () => {
        console.log("comment btn clicked");
        testBox.innerHTML = "this is the test box";

        // bookshelfWrapper.append(testBox);
      });

      bookshelfWrapper.append(book.render(), favoriteButton, commentButton);
      body.append(bookshelfWrapper);
      // return bookshelfWrapper;
    });
  }

  // everything with rendering fave books
  favoritesRender() {
    let body = document.querySelector("#bookShelf");
    console.log(`favs: `, this.favoritesList);
    body.innerHTML = ""; // this resets the page when called
    let faveBookWrapper = document.createElement("ul");
    this.favoritesList.map((book) => {
      // create a instance of the book to render
      const faveBook = book.render();

      faveBookWrapper.append(faveBook);
      body.append(faveBookWrapper);
    });
    let bookCounter = document.querySelector("#allBookCounter");
    let totalBooks = this.bookShelf.reduce((acc, curr) => acc + 1, 0);
    let totalFavorites = this.favoritesList.reduce((acc, curr) => acc + 1, 0);
    bookCounter.innerHTML = `<span>There are ${totalBooks} total books <br>
      There are ${totalFavorites} favorite books</span>`;
  }
}

let newBookShelf = new Bookshelf(); // new instance of bookshelf
newBookShelf.pushBooks(bookData);
