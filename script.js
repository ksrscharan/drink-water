const cups = document.querySelectorAll(".cup");
const completed = document.querySelector(".completed");
const remaining = document.querySelector(".remaining");
const reset = document.querySelector(".reset");
var height = 0;
cups.forEach((cup) => {
  cup.addEventListener("click", () => {
    cup.classList.toggle("cup-selected");
    if (cup.classList.contains("cup-selected")) {
      height += 12.5;
      completed.style.height = `${height}%`;
      completed.innerText = `${height}% Completed`;
      remaining.innerText = `${2 - (height / 100) * 2}L Remaining`;
      remaining.style.height = `${100 - height}%`;
    } else {
      height -= 12.5;
      completed.style.height = `${height}%`;
      completed.innerText = `${height}% Completed`;
      remaining.innerText = `${2 - (height / 100) * 2}L Remaining`;
      remaining.style.height = `${100 - height}%`;
    }
  });
});
reset.addEventListener("click", resetAll);
function resetAll() {
  height = 0;
  cups.forEach((cup) => {
    cup.classList.remove("cup-selected");
  });
  completed.style.height = `${height}%`;
  completed.innerText = `${height}% Completed`;
  remaining.innerText = `${2 - (height / 100) * 2}L Remaining`;
  remaining.style.height = `${100 - height}%`;
}
