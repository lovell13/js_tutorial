// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Adds 'blank' method to all strings.
String.prototype.blank = function() {
    return !!this.match(/\s|^$/g);
}

// Adds 'last' method to all arrays, returning the last element.
Array.prototype.last = function() {
    return console.log(this[this.length - 1]);
}

// Reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        let content = string;
        return content.toLowerCase();
    }

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }
        
    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
}
