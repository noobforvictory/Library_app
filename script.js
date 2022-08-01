var main = document.querySelector('.main');
let myLibrary = [];
var i =0;

var read = 0 ;
var unRead = 0;

function Book(author,title,totalPages,status){
this.author = author,
this.title = title,
this.totalPages = totalPages,
this.status = status
}
function displayLog(){
    document.querySelector('.displayTotal').innerHTML = myLibrary.length;
    document.querySelector('.displayRead').innerHTML = read;
    document.querySelector('.displayUnRead').innerHTML = unRead;
}



 Book.prototype.displayBook = function (){
    

      const book = document.createElement('div');
      book.classList.add('book');
      book.setAttribute('id',i);
      i++;
      
      main.appendChild(book);
      const author = document.createElement('div');
      author.textContent = 'Author:\u00A0  '+this.author;
      const title = document.createElement('div');
      title.textContent = 'Title:\u00A0 '+this.title;
      const totalPages = document.createElement('div');
      totalPages.textContent = 'Total pages:\u00A0 '+this.totalPages;
      
      const status = document.createElement('button');
      const removeButton = document.createElement('button');
       
       removeButton.textContent = 'Remove';
       removeButton.classList.add('removeButton');
       
       if(this.status === 'Read'){
        read++;
        status.classList.add('Read');
        status.textContent = 'Read';
      }else{
        unRead++;
        status.classList.add('Unread');
        status.textContent = 'Unread';
      }
      displayLog();
      
      book.append(author,title,totalPages,status,removeButton);
      
      document.getElementById('form').reset();
      cancel();
      
   
}

function cancel(){
    document.querySelector('.popUpBack').style.display = 'none';
};

function removeBook(num){
    myLibrary.splice(num,1);
    i--;
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


document.addEventListener('click',
function(e){
    
    if(e.target.matches('button.btn')){
        document.querySelectorAll('.Read').forEach(element =>element.addEventListener('click',
        function(e){
    
        let num =  e.target.parentElement.id;
    
    myLibrary[num].status = 'Unread';
    e.target.classList.remove('Read');
    e.target.classList.add('Unread');
    e.target.textContent = myLibrary[num].status;
    read--;
    unRead++;
    displayLog();
    },{once:true}));
}
    if(e.target.matches('button.btn')){
        document.querySelectorAll('.Unread').forEach(element =>element.addEventListener('click',
        function(e){
    
        let num =  e.target.parentElement.id;
        
           myLibrary[num].status = 'Read';
           e.target.classList.remove('Unread');
           e.target.classList.add('Read');
           e.target.textContent = myLibrary[num].status;
           read++;
           unRead--;
           displayLog();
        },{once:true}));
    }
    });





    
   




// function(){
//     let num =  element.parentElement.id;
//  console.log(e);
//     myLibrary[num].status = 'Unread';
//     element.classList.remove('Read');
//     element.classList.add('Unread');
//     element.textContent = myLibrary[num].status;
//     read--;
//     unRead++;
//     displayLog();