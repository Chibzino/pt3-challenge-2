//Transform an array into string
const maxTemp1 = [17, 21, 23];
const maxTemp2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]}°C in ${i + 1} days .... `;
  }
  console.log("...." + str);
  return str;
}

printForecast(maxTemp1);
