//#region TASK1 (MIN MAX)
var arr = [3, 5, 4, 1, 34, 45, 77, 87, 69, 90, 89, 7, 65, 3]
let min = arr[0]
let max = arr[0]

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(min);
console.log(max);
//#endregion

//#region TASK2 (SAME LETTER)
let str = "anarrffghhhfff"
let letters = []
for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
            letters.push(str[i])
        }
    }
}
let uniqueChars = letters.filter((c, index) => {
    return letters.indexOf(c) === index;
})
console.log(uniqueChars);

//#endregion 

//#region TASK 3 PALINDROME

let stre = "anananfana"
for (var i = 0; i < stre.length / 2; i++) {
    if (stre[i] == stre[stre.length - 1 - i]) {
        console.log("Palindromdur");
    }
}
console.log("Deyildir");

//#endregion
