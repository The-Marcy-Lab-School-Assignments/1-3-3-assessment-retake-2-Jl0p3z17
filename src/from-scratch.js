const petJudger = () => {
};

const loopFromOneUpToAnother = () => {
};

const shoutEveryLetterForLoop = () => {
};

const shoutArrayMethod = () => {
};

const generateMultiplesOf5ToNum = () => {
};

const isLongArray = () => {
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


const getAllXCoordinates = () => {
};

const carMaker = () => {
};

const getFavoriteChildName = () => {
};

const getPessimisticTotal = () => {
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
