describe ("Add Book",function(){
    it ("Adding new book", function(){
        assert.deepEqual(addBook("Test","Writer 1", 11123),{title:"Test",author:"Writer 1",libraryID: 11123});
    });
});


describe ("Get Titles",function(){
    it ("Get book titles", function(){
        assert.deepEqual(getTitles(), [
            "The Road Ahead",
            "Walter Isaacson", 
        "The Road Ahead",
        "Mockingjay: The Final Book of The Hunger Games",
        "Test"]);
    });
});


describe ("Find Book",function(){
    it ("Find book", function(){
        assert.deepEqual(findBook("The"),     [

            { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },

            { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },

            { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }

        ]);
    });
});
