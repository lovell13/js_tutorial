// Sort an array the anonymous way.
let a = [17, 99, 42, 8];
result = a.sort(function(a,b) { 
    return a-b; 
});

result.forEach(function(element) {
    console.log(element);
})

