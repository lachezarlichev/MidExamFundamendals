function buscuits(input) {
  let numberOfBuscuits = input[0];
  let countOfWorkers = input[1];
  let buscuitsFor30Days = input[2];
  let sum = 0;
  let production = numberOfBuscuits * countOfWorkers;
  for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
      sum += Math.floor((production * 75) / 100);
    } else {
      sum += production;
    }
  }
  console.log(`You have produced ${sum} biscuits for the past month.`);

  if (sum > buscuitsFor30Days) {
    let procent = ((sum - buscuitsFor30Days) / buscuitsFor30Days) * 100;
    console.log(`You produce ${procent.toFixed(2)} percent more biscuits.`);
  } else {
    let procent = (( buscuitsFor30Days - sum) / buscuitsFor30Days) * 100;
    console.log(`You produce ${procent.toFixed(2)} percent less biscuits.`);
  }
}
buscuits(["78",
"8",
"16000"])
