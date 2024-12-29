const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultText = document.getElementById("result");

/*checking palindrome function*/
const checkPalindrome = (textInput) => {
  if (textInput === ""){
    alert("Please input a value");
    return "";
  } else if (textInput === 'a'){
    return "a is a palindrome";
  } else if (textInput === 'A') {
    return "A is a palindrome";
  } else {
    let text = textInput.toLowerCase();
    let cleanedText = text.replace(/[^a-zA-Z0-9]/g, '');
    let reversedText = '';
    for (let i = cleanedText.length - 1; i >= 0; i--){
      reversedText += cleanedText[i]
    }
    if (cleanedText === reversedText){
      return `${textInput} is a palindrome`;
    } else {
      return `${textInput} is not a palindrome`;
    }
  }
}

function getResult (){
  resultText.innerText = checkPalindrome(textInput.value);
}

/*interactive*/
checkButton.addEventListener("click", function () {
  getResult();

});
