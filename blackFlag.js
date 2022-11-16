function blackFlag(array) {
  let days = Number(array[0]);
  let dailyPlunder = Number(array[1]);
  let target = Number(array[2]);
  let sum = 0;
  for (let i = 1; i <= days; i++) {
    sum += dailyPlunder;
    if (i % 3 == 0) {
      sum += dailyPlunder / 2;
    }

    if (i % 5 == 0) {
      sum = sum * 0.7;
    }
  }
  let procentleft = (sum / target) * 100;

  if (sum >= target) {
    console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${procentleft.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["10", "20", "380"]);
