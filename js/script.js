function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}

console.log(getWidth());

let borderWidth = getWidth()/2-(700/2);
console.log(borderWidth);

document.getElementById("navbar").style.backgroundColor = 'PINK';
document.getElementById("navbar").style.left = borderWidth;