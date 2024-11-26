// Function to check if the input text is a palindrome
function checkPalindrome() {
    // Get the input text from the field
    const input = document.getElementById("inputText").value;
  
    // Remove any extra spaces and convert the text to lowercase for consistency
    const cleanedInput = input.replace(/[\W_]/g, "").toLowerCase();
  
    // Reverse the cleaned input string
    const reversedInput = cleanedInput.split("").reverse().join("");
  
    // Compare the cleaned input with the reversed string
    if (cleanedInput === reversedInput && cleanedInput !== "") {
      document.getElementById("result").textContent = `"${input}" is a Palindrome!`;
      document.getElementById("result").style.color = "green";
    } else {
      document.getElementById("result").textContent = `"${input}" is NOT a Palindrome.`;
      document.getElementById("result").style.color = "red";
    }
  }
  