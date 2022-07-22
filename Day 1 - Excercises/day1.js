
// Day 1 Challenge

//1
let arr1 = [];
console.log(arr1);

//2
let arr2 = ["item1", "item2", "item3"];
console.log(arr2);

//3
console.log(arr2.len);

//4
console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[2])

//5
let mixedDataTypes = [1,"two", 3, "Deepak", {type: 'mixed Array'}];
console.log(mixedDataTypes)

//6
let itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon']

//7
console.log(itCompanies)

//8
console.log(itCompanies.length)

//9
console.log(itCompanies[0])
console.log(itCompanies[Math.ceil(itCompanies.length/2)])
console.log(itCompanies[itCompanies.length-1])


//10
for(let i=0;i<itCompanies.length;i++) {
    console.log(itCompanies[i])
}


//11
for(let i=0;i<itCompanies.length;i++)
{
    itCompanies[i] = itCompanies[i].toUpperCase();
    console.log(itCompanies[i])
}

//12
console.log(itCompanies.join(", "))

//13
if(itCompanies.includes("NIKE")) {
    console.log(itCompanies[itCompanies.indexOf("NIKE")])
} else {
    console.log("Company not found!")
}

//14
let filteredCompanies = [];
itCompanies.map(co => {
    if(co.indexOf('o') != co.lastIndexOf('o')) {
        filteredCompanies.push(co)
    }
});
console.log(filteredCompanies)


//15
itCompanies.sort()
console.log(itCompanies)

//16
itCompanies.reverse();
console.log(itCompanies)

//17
let firstThree = itCompanies.slice(0,3)
console.log(firstThree)

//18
let lastThree = itCompanies.slice(-3)
console.log(lastThree)

//19
let middleItem = Math.ceil(itCompanies.length/2)
console.log(itCompanies.slice(middleItem,middleItem+1))


//20
itCompanies.shift();
console.log(itCompanies)


//21
let midElement = Math.ceil(itCompanies.length/2)
itCompanies.splice(midElement,1)


//22
itCompanies.pop()
console.log(itCompanies)

//23
itCompanies = [];