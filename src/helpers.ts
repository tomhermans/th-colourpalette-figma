// function hexToString(hexString) {
//   return parseInt(hexString, 16);
// }


// function hsl2rgb(h : number, s : number, l : number) {
//   // input (0-360, 0-100, 0-100)
//   s = s / 100;
//   l = l / 100;
//   let a = s * Math.min(l, 1 - l);
//   let f = (n, k = (n + h / 30) % 12) =>
//     l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
//   return [f(0) , f(8) , f(4) ]; // output (0-1)
//   // return [f(0) * 255, f(8) * 255, f(4) * 255]; // output (0-255)
// }


// function hslToHex(h, s, l) {
//   l /= 100;
//   const a = (s * Math.min(l, 1 - l)) / 100;
//   const f = (n) => {
//     const k = (n + h / 30) % 12;
//     const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
//     return Math.round(255 * color)
//       .toString(16)
//       .padStart(2, "0"); // convert to Hex and prefix "0" if needed
//   };
//   return `#${f(0)}${f(8)}${f(4)}`;
// }