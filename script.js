let myLibrary = [];
var i =0;

function Book(author,title,totalPages,status){
this.author = author,
this.title = title,
this.totalPages = totalPages,
this.status = status
}

var main = document.querySelector('.main');

 Book.prototype.displayBook = function (){
    

      const book = document.createElement('div');
      book.classList.add('book');
      main.appendChild(book);
      const author = document.createElement('div');
      author.textContent = 'Author:\u00A0  '+this.author;
      const title = document.createElement('div');
      title.textContent = 'Title:\u00A0 '+this.title;
      const totalPages = document.createElement('div');
      totalPages.textContent = 'Total pages:\u00A0 '+this.totalPages;
      
      const status = document.createElement('button');
      if(this.status === 'Read'){
        status.classList.add('Read');
        status.textContent = 'Read';
      }else{
        status.classList.add('Unread');
        status.textContent = 'Unread';
      }
      book.append(author,title,totalPages,status);
      document.getElementById('form').reset();
      cancel();
   
}

function cancel(){
    document.querySelector('.popUpBack').style.display = 'none';
};

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
    let value = document.getElementById('status');
    let status = value.options[value.selectedIndex].text;
    const b = new Book(author,title,totalPages,status);
    myLibrary.push(b);
    if(author !== ''){
    b.displayBook();
    }
}

document.querySelector('.button').addEventListener('click',
function(){
    document.querySelector('.popUpBack').style.display = 'flex';
});
document.querySelector('.cancel').addEventListener('click', cancel);

document.querySelector('.btn').addEventListener('click',getValue);

