function aaa(input) {
  let arrr = input.shift();
  let newarr = arrr.split(">>");
  let maket = newarr.map((x) => x);
  let taxForcar = 50;
  let taxForHeavy = 80;
  let taxForSports = 100;
  let totalSum = 0;
  let copy = newarr.map((x) => x);
  copy = newarr.shift().split(" ");

  for (let i = 0; i < maket.length; i++) {
    let commond = copy[0];
    let first = copy[1];
    let second = copy[2];

    if (i < maket.length - 1) {
      copy = newarr.shift().split(" ");
    }
    if(commond != "family" && commond != "heavyDuty" && commond!= "sports"){
      console.log('Invalid car type.')
    }
    switch (commond) {
      case "family":
        let yearsForTravelingCar = Math.floor(second / 3000);
        let sumForFamily = yearsForTravelingCar * 12 + (taxForcar - first * 5);
        totalSum += sumForFamily;
        console.log(`A ${commond} car will pay ${sumForFamily.toFixed(2)} euros in taxes.`);

        break;
      case "heavyDuty":
        let yearsForTravelingHeavy = Math.floor(second / 9000);
        let sumForHeavy =
          yearsForTravelingHeavy * 14 + (taxForHeavy - first * 8);
        totalSum += sumForHeavy;
        console.log(`A ${commond} car will pay ${sumForHeavy.toFixed(2)} euros in taxes.`);

        break;
      case "sports":
        let yearsForTravelingSports = Math.floor(second / 2000);
        let sumForSports =
          yearsForTravelingSports * 18 + (taxForSports - first * 9);
        totalSum += sumForSports;
        console.log(`A ${commond} car will pay ${sumForSports.toFixed(2)} euros in taxes.`);
        break;
    }
  }console.log(`The National Revenue Agancy will collect ${totalSum.toFixed(2)} euros in taxes.`);
 
}
aaa(["family 3 7210>>heavyDuty 9 31000>>sports 4 7410"]);
