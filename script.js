var main = document.querySelector('.main');
let myLibrary = [];


function Book(author,title,totalPages,status){
this.author = author,
this.title = title,
this.totalPages = totalPages,
this.status = status
}
function displayLog(){
   let read =  myLibrary.reduce((total,each)=>{
      if(each.status === 'Read')total++;
      return total;
   },0);
   let unRead =  myLibrary.reduce((total,each)=>{
    if(each.status === 'Unread')total++;
    return total;
 },0);
    document.querySelector('.displayTotal').innerHTML = myLibrary.length;
    document.querySelector('.displayRead').innerHTML = read;
    document.querySelector('.displayUnRead').innerHTML = unRead;
}



 Book.prototype.displayBook = function (){
    

      const book = document.createElement('div');
      book.classList.add('book');
      book.setAttribute('id',this.author);
      
     
      
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
        
        status.classList.add('Read');
        status.textContent = 'Read';
      }else{
       
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
function getIndex(name){
  return  myLibrary.findIndex(element=>element.author === name);
}

function removeBook(name){
    const index = getIndex(name);
    
    myLibrary.splice(index,1);
    document.getElementById(name).remove();
    displayLog();
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
        
        if(document.querySelectorAll('.Read')){
            document.querySelectorAll('.Read').forEach(element =>element.addEventListener('click',
        function(){
            let name =  element.parentElement.id;
        let index = getIndex(name);
        myLibrary[index].status = 'Unread';
        element.classList.remove('Read');
        element.classList.add('Unread');
        element.textContent = myLibrary[index].status;
        
        displayLog();
    },{once:true}));
    }
        if(document.querySelectorAll('.Unread')){
            document.querySelectorAll('.Unread').forEach(element =>element.addEventListener('click',
            function(){
        
            let name =  element.parentElement.id;
            let index = getIndex(name);
            
               myLibrary[index].status = 'Read';
               element.classList.remove('Unread');
               element.classList.add('Read');
               element.textContent = myLibrary[index].status;
               
               displayLog();
            },{once:true}));
        }
        if(document.querySelectorAll('.removeButton')){
            document.querySelectorAll('.removeButton').forEach(element=>element.addEventListener('click',function(){
                let name =  element.parentElement.id;
                removeBook(name);  
                
            },{once:true}));
            
        }
        });
    
    