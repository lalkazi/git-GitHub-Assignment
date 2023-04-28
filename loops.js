// 1. Create a loop tha logs the numbers from 0-99 (ascending)
// const num = function () {
for (i = 0; i <= 99; i++) {
  console.log("Number in ascending order " + i);
}
//};

// 2. Create a loop that logs the numbers from 99-0 (descending)
for (i = 99; i >= 0; i--) {
  console.log("Number in descending order " + i);
}

// 3. create a loop that logs the Even number from 0-98(ascending order)
for (i = 0; i <= 98; i++) {
  if (i % 2 === 0 && i !== 0) {
    console.log("The even number in ascending order is " + i);
  }
}

// 4. create a loop that logs the Even numbers from 98-0(descending)

for (i = 98; i >= 0; i--) {
  if (i % 2 === 0 && i !== 0) {
    console.log("The even number in descending order " + i);
  }
}

// 5. Create a loop that logs the odd numbers from 0-99(ascending)

for (i = 0; i <= 99; i++) {
  if (i % 2 !== 0) {
    console.log(`The odd number in ascending order is ${i}`);
  }
}

// 6. Create a loop that logs the ODD numbers from 99-0 (descending)

for (i = 99; i >= 0; i--) {
  if (i % 2 !== 0) {
    console.log(`The odd number in descending order is ${i}`);
  }
}

// 7. Create a loop that logs the numbers from 49-72 (ascending)
for (i = 0; i <= 100; i++) {
  if (i >= 49 && i <= 72) {
    console.log("The number is " + i);
  }
}

// 8. Create a loop that logs the numbers from 81-26 (descending)

for (i = 81; i >= 26; i--) {
  if (i > 25 && i < 82) {
    console.log("The choosen number is " + i);
  }
}

// 9. Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)

for (i = 0; i <= 90; i++) {
  if (i >= 3 && i % 3 === 0) {
    console.log("The number from 3-90 and multiple of 3 in ascending is " + i);
  }
}
