const myLibrary = [];

function Book(name = "", author = "", pages = 0, read = false) {
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
}


function addBookToLibrary(book, library) {
    library.push(book)
}

const b1 = new Book('Little Life','Nick Calenti',250, false)
const b2 = new Book('Little Life2','Nick Calenti2',2250, false)

addBookToLibrary(b1, myLibrary)
addBookToLibrary(b2, myLibrary)

const bookArea = document.getElementById("content")

function removeBook(id) {
    myLibrary.splice(id,1)
    const bookCard = document.querySelector(`[data-id="${id}"]`)
    bookArea.removeChild(bookCard)
}


function toggleRead(book , id){
    book.read = !book.read
    const button = document.querySelector(`[data-id="${id}"] > .action-bar > button`)
    const field = document.querySelector(`[data-id="${id}"] > .info-container > .card-row > .read`)

    button.textContent = book.read ? "Mark As Un-Read":"Mark As Read"

    field.textContent = book.read
    
}



function addBook(book,id,place){

    const bookCard = document.createElement("div")
    bookCard.classList.add("book-card")
    const infoContainer = document.createElement("div")
    infoContainer.classList.add("info-container")

    bookCard.appendChild(infoContainer)

    bookCard.dataset.id = id


    const cardRow1 = document.createElement("div")
    cardRow1.classList.add("card-row")
    const cardRow2 = document.createElement("div")
    cardRow2.classList.add("card-row")
    const cardRow3 = document.createElement("div")
    cardRow3.classList.add("card-row")
    const cardRow4 = document.createElement("div")
    cardRow4.classList.add("card-row")

    const cardlabel1 = document.createElement("span")
    cardlabel1.classList.add("card-label")
    cardlabel1.textContent = "Title:"
    const cardlabel2 = document.createElement("span")
    cardlabel2.classList.add("card-label")
    cardlabel2.textContent = "Author:"
    const cardlabel3 = document.createElement("span")
    cardlabel3.classList.add("card-label")
    cardlabel3.textContent = "Pages:"
    const cardlabel4 = document.createElement("span")
    cardlabel4.classList.add("card-label")
    cardlabel4.textContent = "Read:"


    const data1 = document.createElement("span")
    data1.classList.add("title")
    data1.textContent = book.name
    const data2 = document.createElement("span")
    data2.classList.add("title")
    data2.textContent = book.author
    const data3 = document.createElement("span")
    data3.classList.add("title")
    data3.textContent = book.pages
    const data4 = document.createElement("span")
    data4.classList.add("title")
    data4.classList.add("read")
    data4.textContent = book.read

    cardRow1.appendChild(cardlabel1)
    cardRow1.appendChild(data1)

    cardRow2.appendChild(cardlabel2)
    cardRow2.appendChild(data2)

    cardRow3.appendChild(cardlabel3)
    cardRow3.appendChild(data3)

    cardRow4.appendChild(cardlabel4)
    cardRow4.appendChild(data4)

    infoContainer.appendChild(cardRow1)
    infoContainer.appendChild(cardRow2)
    infoContainer.appendChild(cardRow3)
    infoContainer.appendChild(cardRow4)


    const actionBar = document.createElement("div")
    actionBar.classList.add("action-bar")
    bookCard.appendChild(actionBar)

    const button = document.createElement("button")
    button.classList.add("mark-read-button")
    button.textContent = book.read ? "Mark As Un-Read":"Mark As Read"

    const trash = document.createElement("img")
    trash.classList.add("icon-delete")
    trash.setAttribute("alt","Delete Button")
    trash.setAttribute("src","trash-can-outline.svg")

    actionBar.appendChild(button)
    actionBar.appendChild(trash)

    trash.addEventListener("click", () => {removeBook(id)})

    button.addEventListener("click", () => {toggleRead(book, id)})

    place.appendChild(bookCard)

    

}



for(const [index, book] of myLibrary.entries()){
    addBook(book, index, bookArea)
}