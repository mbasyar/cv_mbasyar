function overlay() {
  //dapatkan element by id menu
  var overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
}

function overlayClick() {
  var overlay = document.getElementById("overlay");

  overlay.style.display = "none";
}

window.onresize = overlayClick;
console.