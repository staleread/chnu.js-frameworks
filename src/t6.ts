interface LibraryItem {
  title: string;
  author: string;
  borrow(): void;
  isBorrowed: boolean;
}

class Book implements LibraryItem {
  title: string;
  author: string;
  pages: number;
  isBorrowed: boolean = false;

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  borrow(): void {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`Book "${this.title}" has been borrowed.`);
    } else {
      console.log(`Book "${this.title}" is already borrowed.`);
    }
  }
}

class Magazine implements LibraryItem {
  title: string;
  author: string;
  issueNumber: number;
  isBorrowed: boolean = false;

  constructor(title: string, author: string, issueNumber: number) {
    this.title = title;
    this.author = author;
    this.issueNumber = issueNumber;
  }

  borrow(): void {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`Magazine "${this.title}" has been borrowed.`);
    } else {
      console.log(`Magazine "${this.title}" is already borrowed.`);
    }
  }
}

class DVD implements LibraryItem {
  title: string;
  author: string;
  duration: number; 
  isBorrowed: boolean = false;

  constructor(title: string, author: string, duration: number) {
    this.title = title;
    this.author = author;
    this.duration = duration;
  }

  borrow(): void {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`DVD "${this.title}" has been borrowed.`);
    } else {
      console.log(`DVD "${this.title}" is already borrowed.`);
    }
  }
}

class Library {
  private items: LibraryItem[] = [];

  addItem(item: LibraryItem): void {
    this.items.push(item);
  }

  findItemByName(name: string): LibraryItem | undefined {
    return this.items.find(item => item.title === name);
  }

  listAvailableItems(): void {
    const availableItems = this.items.filter(item => !item.isBorrowed);
    if (availableItems.length === 0) {
      console.log("No available items in the library.");
    } else {
      console.log("Available items in the library:");
      availableItems.forEach(item => console.log(`- ${item.title} by ${item.author}`));
    }
  }
}

const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218);
const magazine1 = new Magazine("National Geographic", "Various Authors", 1001);
const dvd1 = new DVD("The Matrix", "The Wachowskis", 136);

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

const foundItem = library.findItemByName("The Great Gatsby");
if (foundItem) {
  console.log(`Found item: ${foundItem.title} by ${foundItem.author}`);
}

library.listAvailableItems();

book1.borrow();
dvd1.borrow();
book1.borrow();

library.listAvailableItems();
