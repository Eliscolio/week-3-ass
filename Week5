class Song{
    constructor(title,artist,year){
        this.title = title;
        this.artist = artist;
        this.year = year;
    }
  
    describe(){
    return `${this.title} by ${this.Artist} in ${this.year}`
    }
}

class Menu {
    constructor() {
        this.songs = [];
    }
    
    mainMenu(){
        let menuSelection =prompt(`
            1)Create a song
            2)View a song
            3)Delete a song
        `)
        switch (menuSelection){
            case "1":
                this.addSong();
                break;
            case "2":
                this.playSong();
                break;
            case "3":
                this.deleteSong()
                break;
            default:
                this.mainMenu();
        }
    }
   addSong() { 
        const newSong = new Song(
            prompt("Enter Title"),
            prompt("enter artist"),
            prompt("enter year")
        );
        this.Songs.push(newSong);
        this.mainMenu();
    }
    deleteSong(){
        alert("Delete a book")
    } 
    viewSongs() {
        let listOfSongs = "";
        for (let song of this.songs ){
            listOfSongs += (Song.describe() + "\n");
        }
        prompt(listOfSongs + "\n\nEnter 0 to back to the main menu: ");
        this.mainMenu();

    }
}
const menu = new Menu();
menu.mainMenu();
console.log(Song)