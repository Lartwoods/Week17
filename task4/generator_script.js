function generator() {
  let long = document.querySelector(".number").value;
  let min = document.querySelector(".min").value;
  let max = document.querySelector(".max").value;
  let result = [];
  for (let i = 0; i < long; i++) {
    result.push(randomInteger(min, max));
  }

  document.querySelector(".out").innerHTML = result;
  let minNumber = Math.min.apply(null, result);
  let maxNumber = Math.max.apply(null, result);
  document.querySelector(".div_min").innerHTML = minNumber;
  document.querySelector(".div_max").innerHTML = maxNumber;

  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }

  let mean = sum / result.length;
  document.querySelector(".mean").innerHTML = mean;
  console.log(result);
  return result;
}
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}
function getMinOfArray(result) {
  return Math.min.apply(null, result);
}

function getMaxOfArray(result) {
  return Math.max.apply(null, result);
}
