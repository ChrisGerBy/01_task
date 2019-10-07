const arr = [1, 7, 3, 44, 99, 77887];
const arr2 = [1, 7, 3, 2, 3, 1, 6, 3];

const findNumAndIndices = (arr) => {
    let obj = {};
    let maxLength = 0;
    let resultNumber;

    function checkLength(obj, value) {
        if (obj[value].length > maxLength) {
            maxLength = obj[value].length;
            resultNumber = value;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (!Object.keys(obj).includes(arr[i].toString())) {
            obj[arr[i]] = [i];
            checkLength(obj, arr[i]);
        } else {
            obj[arr[i]].push(i);
            checkLength(obj, arr[i]);
        }
    };


    let result;

    if(arr.length > 1 && maxLength === 1) {
        result = `There are ${arr.length} numbers in the array. Each number enters only once.`
    } else {
        result = {
            'number with the most entries': resultNumber,
            'indices of the number': obj[resultNumber.toString()],
        };
    }

    console.log(result);
};

findNumAndIndices(arr);
findNumAndIndices(arr2);