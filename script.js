function checkPalindrome() {
    const num = document.getElementById('numberInput').value;
    const reversedNum = num.split('').reverse().join('');
    const resultDiv = document.getElementById('result');

    if (num === reversedNum) {
        resultDiv.textContent = num + " is a palindrome!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = num + " is not a palindrome.";
        resultDiv.style.color = "red";
    }
}
