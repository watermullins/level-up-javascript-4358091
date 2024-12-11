class Book{

  constructor(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  getAvailability(){
    if(this.numCopies == 0)
      return "out of stock";
    if(this.numCopies < 10)
      return "low stock";
    if(this.numCopies >= 10){
      return "in stock";
    }
  }

  sell(numSold = 1){
   this.numCopies -= numSold;
  }

  restock(numCopies = 5){
    this.numCopies += numCopies;
  }
}

let b1 = new Book("name of book", "writer", 12344, 7);
console.log(b1.getAvailability());

b1.sell(7);
console.log(b1.getAvailability());
