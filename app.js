// QUICK QUESTION 1:
// new Set([1,1,2,2,3,4])
// Will return - {1,2,3,4}

// QUICK QUESTION 2:
// [...new Set("referee")].join("")
// Will return - "ref"

// QUICK QUESTION 3:
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// Map m looks like - 0: {Array(3) => true } 1: {Array(3) => false}

// hasDuplicate
const hasDuplicate = (arr) => {
  return new Set(arr).size !== arr.length;
}

// vowelCount 
const vowelCount = (str) => {
  const vowelCountMap = new Map();
  [...str].forEach(char => {
    const lowerCaseChar = char.toLowerCase();
    if('aeiou'.includes(lowerCaseChar)){
      if(vowelCountMap.has(lowerCaseChar)){
        vowelCountMap.set(lowerCaseChar, vowelCountMap.get(lowerCaseChar) + 1);
      } else {
        vowelCountMap.set(lowerCaseChar, 1);
      }
    }
  });
  return vowelCountMap;
}