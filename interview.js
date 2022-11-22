// function pyramid(height) {
//     let output = [];
//     let str;
//   for (let i = 0; i < height; i++) {
//       for  (let j = 0; j < (2*i)-1;j++ ) {
//           str += "*"
//       }
//       output.push(str)
// str = ""
//   }
//   return output
// }

function pyramid(height) {
  let output = [];
  let str = "";

  if (typeof height !== "number") {
    return "input needs to be a number";
  }
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    output.push(str);
    str = "";
  }
  return output;
}

// h= 1, star =1
// h=2, star =3
//h=3, star 5
//2h-1 = star

//

module.exports = pyramid;
