"use strict"
let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
   ];
function addBook(title,author, libraryID){
   

    let newBook = {
        title,
        author,
        libraryID
    };
    libraryBooks.push(newBook);
    return newBook;
}


function getTitles(){
    return libraryBooks.map(data=>data.title);
}

function findBook(title){
    return libraryBooks.filter(data=>data.title.includes(title)).sort(data => data.author);
}
console.log(getTitles());
console.log(findBook("The"));

