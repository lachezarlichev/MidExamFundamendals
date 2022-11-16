function book(input) {
  let bookshelf = input.shift();
  let books = bookshelf.split("&");
  let copy = input.map((x) => x);
  let comands = input.shift().split(" | ");
  while (comands != "Done") {
    let comand = comands[0];
    let nameBook = comands[1];
    let seconBook = comands[2];

    switch (comand) {
      case "Add Book":
        if (!books.includes(nameBook)) {
          books.unshift(nameBook);
        }
        break;
      case "Take Book":
        let index = books.indexOf(nameBook);
        if (index > -1) {
          books.splice(index, 1);
        }

        break;
      case "Swap Book":
        if (books.includes(nameBook) && books.includes(seconBook)) {
          
        }
        break;
      case "Insert Book":
        if (!books.includes(nameBook)) {
          books.push(nameBook);
        }
        break;
      case "Check Book":
        let indexChek = books.indexOf(nameBook);
        if (indexChek = nameBook) {
          console.log(books[nameBook]);
        }
        break;
    }

    comands = input.shift().split(" | ");
  }
  console.log(books.join(', '));
}
book([
  "Don Quixote&The Great gatsby&MobyDic",
  "Add Book | Ulysses",
  "Take Book | Don Quixote",
  "Swap Book | MobyDic | The Great gatsby",
  "Check Book | 1",
  "Insert Book | Alisa's Adventures in Worderland",
  "Done",
]);
