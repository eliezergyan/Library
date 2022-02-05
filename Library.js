class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  set isCheckedOut(booleanValue){
    this._isCheckedOut = booleanValue;
  }

  getAverageRating(){
    let ratingsSum = this._ratings.reduce((x , y) => x + y, 0);
    const lengthOfArray = this._ratings.length;
    return ratingsSum/lengthOfArray;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(val){
    this._ratings.push(val);
  }
}

// Book Class
class Book extends Media {
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._title = title;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}

// Movie Class
class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director(){
    return this._director;
  } 

  get runTime(){
    return this._runTime;
  }
}

// CD Class 
class CD extends Media {
  constructor(artist, title, isCheckedOut, ratings, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
}

// Book Instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

// Movie Instance
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());