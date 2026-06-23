let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0],fruits[1],fruits[2]); // Output: Apple Banana Orange




let dailyActivities=["Sleeping","working","eating"];
dailyActivities.push("exercising");
console.log(dailyActivities);


let dailyActivitie=["Sleeping","working","eating"];
dailyActivitie.unshift("exercising");
console.log(dailyActivitie);



// change the element

let Playing=["football",'cricket','tennis'];
Playing[1]="hapkido";
console.log(Playing);



let countingNumbers=[1,2,3,4,5];
countingNumbers.splice(2,2); // Removes 2 elements starting from index 2
console.log(countingNumbers); // Output: [1, 2, 4, 5] (splice modifies the original array)


let countNumbers=[1,2,3,4,5];
let newArray=countNumbers.slice(2,4); // Creates a new array with elements from index 2 to 4
console.log(newArray); // Output: [3, 4] (slice does not modify the original array)