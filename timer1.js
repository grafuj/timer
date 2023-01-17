const args = process.argv;

const timer = (arrayOfTimes) => {
  //edge cases for entire array
  if (!arrayOfTimes.length) {
    console.log('went bad');
    return;
  }

  let delay = 0;
  for (const elem of arrayOfTimes) {
    //edge cases for elements
    if (typeof elem !== "string") {
      console.log('aint no strang');
      continue;
    }
    if (elem < 1) {
      console.log('aint no natural numba');
      continue;
    }
    delay = 1000 * elem;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
};

timer(args);

//test case:
//node timer1.js 10 3 5 15 9 