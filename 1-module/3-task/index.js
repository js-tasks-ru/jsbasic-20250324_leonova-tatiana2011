function ucFirst(str) {
let result="";

for (let char of str) {
  if (char == str[0]) {
    char=str[0].toUpperCase();
  }
  result = result + char;
  
}
return result;
  // ваш код...
}
