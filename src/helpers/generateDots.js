export default function generateDots(number) {
  let dots = "";

  for (let i = 0; i < 10; i++) {
    if (i <= number - 1) {
      dots += "●";
    } else {
      dots += "○";
    }
  }

  return dots;
}
