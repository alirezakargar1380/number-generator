function all_possible_nums(inputParamsValues: { [index: string]: any } = {}, allPossibleNumbers: Array<number> = [], paramCombinationNames?: Array<any>, paramsCombinations?: { [index: string]: string }, permuted?: Array<any>) {
  // Store the original list of parameter names to permute
  if (!paramCombinationNames) { paramCombinationNames = Object.keys(inputParamsValues); }
  if (!paramsCombinations) { paramsCombinations = {}; }

  // Initialize an empty set of permutations
  if (!permuted) {
    // console.log(' + Permuting params values from input params values: ', inputParamsValues);
    permuted = [];
  }

  const inputParamNames: Array<any> = Object.keys(inputParamsValues);

  let numbers = ""
  let i, i2, valuesToConsider: any, combinationMade: boolean, newParamsCombinations: { [index: string]: string }, newInputParamsValues: { [index: string]: string };

  for (i = 0; i < inputParamNames.length; i++) {
    if (paramsCombinations[inputParamNames[i]] == null) {
      const inputParamValues = inputParamsValues[inputParamNames[i]];

      for (i2 = 0; i2 < inputParamValues.length; i2++) {
        numbers = ""
        combinationMade = false;
        // Only store a permutation when we are considering values for all inputs
        valuesToConsider = inputParamsValues[inputParamNames[i]].slice(i2 + 1, inputParamsValues[inputParamNames[i]].length);
        inputParamsValues[inputParamNames[i]] = valuesToConsider;
        // Prepare a new set of parameter combinations
        newParamsCombinations = (<any>Object).assign({}, paramsCombinations);
        newParamsCombinations[inputParamNames[i]] = inputParamValues[i2];

        // Is the parameter combinations complete? Then push it to the permuted list
        if (Object.keys(newParamsCombinations).length == paramCombinationNames.length) {
          combinationMade = true;
          for (const [path, val] of (<any>Object).entries(newParamsCombinations)) {
            numbers += val.toString()
          }
          allPossibleNumbers.push(Number(numbers))
        }

        if (combinationMade) {
          permuted.push(newParamsCombinations);
          newParamsCombinations = {};
        }

        newInputParamsValues = (<any>Object).assign({}, inputParamsValues);
        // Did we finish all possible values for a parameter?
        if (newInputParamsValues[inputParamNames[i]].length == 0) {
          // Now we remove the parameter considered from the recursive combinations
          delete newInputParamsValues[inputParamNames[i]];
        }
        // Do we have any param value to consider in this iteration?
        if (!combinationMade && Object.keys(newInputParamsValues).length > 0) {
          all_possible_nums(newInputParamsValues, allPossibleNumbers, paramCombinationNames, newParamsCombinations, permuted);
        }
      }

    }
  }
  return allPossibleNumbers
}

all_possible_nums({
  "one": [1],
  "two": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "three": [1]
},)
let p = all_possible_nums({
  "one": [1,8],
  "two": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "three": [1]
})

console.log(p)