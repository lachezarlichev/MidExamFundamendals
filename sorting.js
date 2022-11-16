function sorting(input) {
  let sort = input.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < sort.length; i++) {
    let last = sort.pop(sort.length - 1);
    let first = sort.shift();
    result.push(last);
    result.push(first);
  }
  result.push(sort.pop(sort.length - 1))
  result.push(sort.shift())
  console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
