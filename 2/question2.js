function areAnagrams(str1, str2) {
    // Helper function to clean and sort the string
    const cleanString = (str) => {
        return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    }

    return cleanString(str1) === cleanString(str2);
}

// Example usage:
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2));  // Output: true

const str3 = "hello";
const str4 = "billion";
console.log(areAnagrams(str3, str4));  // Output: false
