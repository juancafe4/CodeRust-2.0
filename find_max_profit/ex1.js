let max_profit = function(arr) {
  if (arr.lenght < 2) {
    return;
  }
  let min_buy = arr[0];
  let max_profit = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    let current_profit = arr[i];
    current_max_profit = current_profit - min_buy;

    max_profit = Math.max(max_profit, current_max_profit);

    min_buy = Math.min(min_buy, current_profit);
  }

  return max_profit;
}

console.log(max_profit([8, 5, 12, 9, 19, 1]));
console.log(max_profit([21, 12 ,11, 9, 6, 3]));
console.log(max_profit( [10, 7, 5, 8, 11, 9]));