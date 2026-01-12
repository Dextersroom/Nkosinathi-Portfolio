// Simple password prompt to protect portfolio
const password = "viewonly123";
const userInput = prompt("Enter password to view portfolio:");

if (userInput !== password) {
  document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px;color:red;'>Access Denied 🚫</h2>";
} 
// If correct, page loads normally


