let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function strIncludes(str) {
  if (str.includes('Dino')) {
    console.log('includes Dino');
  } else {
    console.log('Does not include');
  }
}

strIncludes(str1);
strIncludes(str2);