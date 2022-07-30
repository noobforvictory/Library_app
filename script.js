let myLibrary = [];


function Book(author,title,pages,status){
this.author = author,
this.title = title,
this.pages = pages,
this.status = status
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    myLibrary.forEach(element => {
        console.table(element);
    });
}

function removeBook(i){
    myLibrary.splice(i,1);
}

function changeStatus(b){
   if(b.status === 'read'){
    b.status = unread;
   }else{
    b.status = read;
   }
}

myLibrary.prototype = new displayBooks();

let b1 = new Book('tolkin','hobbit',234,'read');
let b2 = new Book('tolkin','hobbit',234,'read');
addBookToLibrary(b1);
addBookToLibrary(b2);
displayBooks();
