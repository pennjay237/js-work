function checkPalindrome() {
    const input = prompt("Enter a word or number:");
    const reversed = input.split('').reverse().join('');

    if (input === reversed) {
        alert("Yes, it's a palindrome!");
    } else {
        alert("No, it's not a palindrome.");
    }
}

checkPalindrome();
