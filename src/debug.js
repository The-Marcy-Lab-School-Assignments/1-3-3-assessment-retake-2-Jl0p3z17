const fixVariables = (temp) => {
  let msg;
  if (temp < 30) {
    msg = 'Pretty chilly.';
  } else if (temp < 70) {
    msg = 'Not bad.';
  } else if (temp < 100) {
    msg = 'On the hot side.';
  } else {
    msg = 'I will die of heat.';
  }
  console.log(msg);
  console.log("And that's how I feel about the temp!");
  return msg;
};

const doubleAllItemsPurely = (arr) => {
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = arr[i] * 2;
  // }
  // return arr;
  const newArr = arr.map(item => item * 2);
  return newArr;
};

const addChildToParentMutation = (parent, child) => {
  // const clone = JSON.parse(JSON.stringify(parent));
  // clone.children.push(child);
  // return clone;
  parent.children.push(child)
  return parent;
};

module.exports = {
  fixVariables,
  doubleAllItemsPurely,
  addChildToParentMutation,
};
