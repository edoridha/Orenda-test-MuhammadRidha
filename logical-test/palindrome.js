const isPalindrome = (x) => {
  const newX = String(x);
  return newX === newX.split("").reverse().join("");
};

console.log(isPalindrome(121));
