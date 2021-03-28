const decroment = document.querySelector("#decroment");
const incroment = document.querySelector("#incroment");
const text = document.querySelector("h1");
let count = 0;

text.innerHTML = count;
decroment.addEventListener("click", delHandler);
incroment.addEventListener("click", addHandler);

function delHandler() {
  count--;
  if (count == 0) {
    text.style.color = "black";
  }
  if (count < 0) {
    text.style.color = "red";
  }
  if (count > 0) {
    text.style.color = "green";
  }
  text.innerHTML = count;
}
function addHandler() {
  count++;
  if (count == 0) {
    text.style.color = "black";
  }
  if (count < 0) {
    text.style.color = "red";
  }
  if (count > 0) {
    text.style.color = "green";
  }
  text.innerHTML = count;
}
