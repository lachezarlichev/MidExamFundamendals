function shoppingList(input) {
  let rawlist = input.shift();
  let shoppingList = rawlist.split("!");
  let commonds = input.slice();
  let currentLine = commonds.shift();
  while (currentLine != "Go Shopping!") {
    let linearks = currentLine.split(" ");
    let commond = linearks[0];
    let firstProduct = linearks[1];
    let secondProduct = linearks[2];

    switch (commond) {
      case "Urgent":
        if (!shoppingList.includes(firstProduct)) {
          shoppingList.unshift(firstProduct);
        }
        break;
      case "Unnecessary":
        shoppingList = shoppingList.filter((x) => x != firstProduct);
        //  let indexItem = shoppingList.indexOf(firstProduct);
        //  if (indexItem > -1) {
        //  shoppingList.splice(indexItem, 1);
        //  }
        break;
      case "Correct":
        let updateItem = shoppingList.indexOf(firstProduct);
        if (updateItem > -1) {
          shoppingList[updateItem] = secondProduct;
        }
        break;
      case "Rearrange":
        let removeItem = shoppingList.indexOf(firstProduct);
        if (removeItem > -1) {
          let element = shoppingList[removeItem];
          shoppingList.splice(removeItem, 1);
          shoppingList.push(element);
        }
        break;
    }

    currentLine = commonds.shift();
  }
  console.log(shoppingList.join(", "));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
