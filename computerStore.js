function copm(input) {
  let sumWithoutTaxes = 0;
  let taxes = 0;
  let totalPrice = 0;
  let finalPrice = 0;
  let count = 0;
  if (input.length < 2) {
    console.log("Invalid order!");
  } else {
    for (let i = 0; i < input.length; i++) {
      count++;
      if (count <= input.length - 1) {
        let curent = Number(input[i]);
        if (curent < 0) {
          console.log("Invalid price!");
        }
        if (curent < 0) {
          curent = 0;
        }
        sumWithoutTaxes += curent;
        taxes += (curent * 20) / 100;
        finalPrice = sumWithoutTaxes + taxes;
      } else {
        let curentString = input[i];
        if (curentString == "special") {
          finalPrice = finalPrice * 0.9;
        } else {
        }
      }

      if ((totalPrice = 0)) {
        console.log("Invalid order!");
      }
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${sumWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${finalPrice.toFixed(2)}$`);
  }
}
//copm(["1023", "15", "-20", "-5.50", "450", "20", "17.66", "19.30", "regular"]);
copm(["regular"]);
