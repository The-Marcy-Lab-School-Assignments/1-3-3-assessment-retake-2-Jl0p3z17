const petJudger = (petBreed, petName) => {
  if (!petBreed || !petName) {
    console.log("Please provide a valid pet")
  } else if (petBreed === "dog") {
    console.log(`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === "cat") {
    console.log(`I love cats! ${petName} is so cute!`)
  } else if (petBreed === "turtle") {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === "snake") {
    console.log(`Not a fan, please take ${petName} and leave.`)
  } else {
    console.log("What an...interesting pet.")
  }
};

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  if (firstNum < secondNum) {
    for (let i = firstNum; i < secondNum; i++) {
      console.log(i);
    }
  }
}
const shoutEveryLetterForLoop = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i].toUpperCase() + "!")
  }
};

const shoutArrayMethod = (str) => {
  const arr = str.split('');
  arr.forEach((char) => {
    console.log(char.toUpperCase() + "!")
  })
};
const generateMultiplesOf5ToNum = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr;
};


const isLongArray = (arr) => {
  if (arr.length > 10) {
    return true;
  } else {
    return false
  }
};

const addToFrontOrBack = (arr, value, isBack) => {
  if (value === undefined || value === null) {
    return arr;
  }

  if (isBack) {
    return arr.push(value)
  } else {
    arr.unshift(value)
  }
}

const replaceMiddleValue = (arr, value) => {
  const middleValue = Math.floor(arr.length / 2);
  arr[middleValue] = value;
  return arr;
};

const getAllXCoordinates = (arrOfCoords) => {
  const xCoordinate = [];
  for (let i = 0; i < arrOfCoords.length; i++) {
    const pair = arrOfCoords[i];
    xCoordinate.push(pair[0]);
  }
  return xCoordinate;
};

const carMaker = (model, maker, year, owner) => {
  const needsOilChange = false;
  const owners = [owner];
  return { model, year, maker, needsOilChange, owners }
};


const getFavoriteChildName = (parent) => {
  const children = parent.children
  if (children.length > 0) {
    return children[0].name
  } else {
    return null;
  }
};

const getPessimisticTotal = (nums) => {
  // there will always be an array, but if its empty return 0
  if (nums.length === 0) {
    return 0;
  }
  //add teh floats together to get a total
  const sum = nums.reduce((acc, curr) => acc + curr)
  // round down the the nearest integer
  const total = Math.floor(sum)
  //return that interger
  return total;
};

const getNamesOfGreedyGnomes = (gnomes) => {
  return gnomes.filter(gnome => gnome.stolenDecorations.length > 1).map(gnome => gnome.name);

};

const getAllNumbersFromString = (str) => {
  const numbers = str.match(/\d+(\.\d+)?/g) || [];
  return numbers.flatMap(number => number.includes('.') ? number.split('.') : [number]);
};

// Do this only after all else
const obliterate = (obj) => {
  for (let key in obj) {
    delete obj[key];
  }
  obj.wasObliterated = true;
};

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  shoutArrayMethod,
  generateMultiplesOf5ToNum,
  isLongArray,
  addToFrontOrBack,
  replaceMiddleValue,
  getAllXCoordinates,
  carMaker,
  getFavoriteChildName,
  getPessimisticTotal,
  getNamesOfGreedyGnomes,
  getAllNumbersFromString,
  obliterate,
};
