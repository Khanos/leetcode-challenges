/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
  let count = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    count++;
  }
  return count;
};

/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps2 = function(num) {
  if (num === 0 || num === 1) return num;
  const reduceNumber = (num, count = 0) => {
    const isEven = num % 2 === 0;
    if(isEven) {
      if (num/2 === 1) return count + 2;
      return reduceNumber(num/2, count + 1);
    }
    if(!isEven) {
      if (num - 1 === 0) return count + 1;
      return reduceNumber(num - 1, count + 1);
    }
  }
  return reduceNumber(num);
};

/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps3 = function(num) {
  if (num === 0 || num === 1) return num;
  let value = num;
  let count = 0;
  while(value !== 0) {
    const isEven = value % 2 === 0;
    if(isEven) {
      value = value / 2;
      if (value === 1) {
        count += 2
      } else {
        count = count + 1;
      };
    } else {
      value = value - 1;
      if (value !== 0) {
        count = count + 1;
      }
    }
  }
  return count;
};


/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps4 = function(num) {
  if (num === 0 || num === 1) return num;
  let value = num;
  let count = 0;
  while(value !== 0) {
    if(value % 2 === 0) {
      value = value / 2;
      count += value === 1 ? 2 : 1;
    } else {
      value = value - 1;
      count += value !== 0 ? 1 : 0;
    }
  }
  return count;
};

export {
  numberOfSteps,
  numberOfSteps2,
  numberOfSteps3,
  numberOfSteps4,
}