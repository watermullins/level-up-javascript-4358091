class Movie{

  constructor(title, director, genre, year, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.rating = rating;
  }

  getOverview(){
    return(this.title + ", a " + this.genre + " film directed by " + this.director + 
      " was relased in " + this.year + ". It received a rating of " + this.rating + '.');
  }
}

m1 = new Movie("The Hobbit", "Peter Jackson", "Fantasy", 2012, 5);
overview = m1.getOverview();
console.log(overview);