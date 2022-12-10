"use strict";
exports.__esModule = true;
function all_possible_nums(inputParamsValues, allPossibleNumbers, paramCombinationNames, paramsCombinations, permuted) {
    if (inputParamsValues === void 0) { inputParamsValues = {}; }
    if (allPossibleNumbers === void 0) { allPossibleNumbers = []; }
    // Store the original list of parameter names to permute
    if (!paramCombinationNames) {
        paramCombinationNames = Object.keys(inputParamsValues);
    }
    if (!paramsCombinations) {
        paramsCombinations = {};
    }
    // Initialize an empty set of permutations
    if (!permuted) {
        permuted = [];
    }
    var inputParamNames = Object.keys(inputParamsValues);
    var numbers = "";
    var i, i2, valuesToConsider, combinationMade, newParamsCombinations, newInputParamsValues;
    for (i = 0; i < inputParamNames.length; i++) {
        if (paramsCombinations[inputParamNames[i]] == null) {
            var inputParamValues = inputParamsValues[inputParamNames[i]];
            for (i2 = 0; i2 < inputParamValues.length; i2++) {
                numbers = "";
                combinationMade = false;
                // Only store a permutation when we are considering values for all inputs
                valuesToConsider = inputParamsValues[inputParamNames[i]].slice(i2 + 1, inputParamsValues[inputParamNames[i]].length);
                inputParamsValues[inputParamNames[i]] = valuesToConsider;
                // Prepare a new set of parameter combinations
                newParamsCombinations = Object.assign({}, paramsCombinations);
                newParamsCombinations[inputParamNames[i]] = inputParamValues[i2];
                // Is the parameter combinations complete? Then push it to the permuted list
                if (Object.keys(newParamsCombinations).length == paramCombinationNames.length) {
                    combinationMade = true;
                    for (var _i = 0, _a = Object.entries(newParamsCombinations); _i < _a.length; _i++) {
                        var _b = _a[_i], path = _b[0], val = _b[1];
                        numbers += val.toString();
                    }
                    allPossibleNumbers.push(Number(numbers));
                }
                if (combinationMade) {
                    permuted.push(newParamsCombinations);
                    newParamsCombinations = {};
                }
                newInputParamsValues = Object.assign({}, inputParamsValues);
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
    return allPossibleNumbers;
}
exports["default"] = all_possible_nums;
