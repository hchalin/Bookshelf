
const all = document.querySelector("#all");
const favs = document.querySelector("#favorites");
const sort = document.querySelector("#sort");
let allIsSelected = true
let favsIsSelected = false

// this sorts the bookshelf... then render below
sort.addEventListener('change', ()=>{

 
  if (sort.value === "A-Z") {
    console.log("sorted a-z");

    newBookShelf.bookShelf.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    newBookShelf.favoritesList.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });

  } else if (sort.value === "Z-A") {
    console.log("sorted Z-A");
    newBookShelf.bookShelf.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    newBookShelf.favoritesList.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  
  } else if (sort.value === "Low-High") {
    console.log("Low-High");
    newBookShelf.bookShelf.sort((a, b) => {
      if (a.subject.length < b.subject.length) {
        return -1;
      }
      if (a.subject.length > b.subject.length) {
        return 1;
      }
      return 0;
    });
    newBookShelf.favoritesList.sort((a, b) => {
      if (a.subject.length < b.subject.length) {
        return -1;
      }
      if (a.subject.length > b.subject.length) {
        return 1;
      }
      return 0;
    });

  } else if (sort.value === "High-Low") {
    console.log("High-Low");
    newBookShelf.bookShelf.sort((a, b) => {
      if (a.subject.length < b.subject.length) {
        return 1;
      }
      if (a.subject.length > b.subject.length) {
        return -1;
      }
      return 0;
    });
    newBookShelf.favoritesList.sort((a, b) => {
      if (a.subject.length < b.subject.length) {
        return 1;
      }
      if (a.subject.length > b.subject.length) {
        return -1;
      }
      return 0;
    });

  }
})



// Render
all.addEventListener("click", () => {
  console.log('all has been rendered')
  allIsSelected = true
  favsIsSelected = false
  console.log(`all: ${allIsSelected}`)
  console.log(`favs: ${favsIsSelected}`)
  newBookShelf.render();

});

favs.addEventListener("click", () => {
  allIsSelected = false
  favsIsSelected = true
  console.log(`all: ${allIsSelected}`)
  console.log(`favs: ${favsIsSelected}`)
  newBookShelf.favoritesRender();




  newBookShelf.favoritesRender();
});
