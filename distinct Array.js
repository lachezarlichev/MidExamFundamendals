function districtArray(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    if (!result.includes(current)) {
      result.push(current);
    }
  }
  console.log(result.join(' '));
}
districtArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
