let refrigeratorContents  = {
  baconStrips: 8,
  chocolateChips: 200,
  cheeseSlices: 6,
  eggs: 4,
  onions: 1,
  pancakeMixBags: 1,
  tomatoes: 1,
};
console.log(refrigeratorContents);
// You shouldn't need to change anything above this line initially
// You may change it to test different scenarios, but it should work as is

function breakfastChecker(contents) {
  const eggsNeeded = 8;
  const baconNeeded = 12;
  const pancakesNeeded = 12;

  let hasEnoughEggs = contents.eggs >= eggsNeeded;
  let hasEnoughBacon = contents.baconStrips >= baconNeeded;
  let hasEnoughPancakeMix = contents.pancakeMixBags >= 1;

  if (!hasEnoughPancakeMix) {
    return false;
  }

  if (hasEnoughEggs && hasEnoughBacon) {
    return true;
  }

  let chocolateChipsNeeded = 15 * pancakesNeeded;
  let hasEnoughChocolateChips = contents.chocolateChips >= chocolateChipsNeeded;

  if (hasEnoughChocolateChips) {
    return true;
  }

  return false;
}

if (breakfastChecker(refrigeratorContents)) {
  console.log("You can make breakfast at home!");
} else {
  console.log("You need to go out to eat.");
}


console.log(breakfastChecker(refrigeratorContents));
// Your function should return true or false
console.log('Does the refrigerator have enough food for breakfast?', breakfastChecker(refrigeratorContents));
