let myLibrary = [];


function Book(author,title,totalPages,pagesRead,status){
this.author = author,
this.title = title,
this.totalPages = totalPages,
this.pagesRead = pagesRead,
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
function getValue(){
   let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let totalPages = document.getElementById('totalPages').value;
    let pagesRead = document.getElementById('pagesRead').value;
    let value = document.getElementById('status');
    let status = value.options[value.selectedIndex].text;
    console.log(status);    
    
}

document.querySelector('.button').addEventListener('click',
function(){
    document.querySelector('.popUpBack').style.display = 'flex';
});
document.querySelector('.cancel').addEventListener('click',
function(){
    document.querySelector('.popUpBack').style.display = 'none';
});

