let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// makeUrl function - take in the state variable, return an array of URLs.
function makeUrl(inputs) {
    let urlTemplate = "https://example.com/";
    return inputs.map(inputs => urlTemplate.concat(inputs));
}
console.log(makeUrl(functionalUrls(states)));

// singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1); 
}
console.log(functionalSingles(states));

// 6.2.1 function 1 to return Dakotas using String#includes
function oneDakota(states) {
    return states.filter(state => state.includes('Dakota'))
}
console.log(oneDakota(states));

// 6.2.1 function 2 to return Dakotas using regex
function twoDakota(states) {
    return states.filter(state => state.split(/\s+/).length === 2);
}
console.log(twoDakota(states));


// Reduce, example 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sum: Imperative solution
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
    return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));


// lengths: Imperative solution
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths }, {});
}
console.log(functionalLengths(states));

// product: Functional solution
function functionalProduct(elements) {
    return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalProduct(numbers));