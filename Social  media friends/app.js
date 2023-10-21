const hambugger = document.getElementById("hambugger");
const OpenMenu = document.getElementById("OpenMenu");

hambugger.addEventListener("click", () => {
  hambugger.classList.toggle("openMenu");
  OpenMenu.classList.toggle("openMenu");
});

document.querySelectorAll(".nav-list").forEach((n) => {
  n.addEventListener("click", () => {
    hambugger.classList.remove("openMenu");
    OpenMenu.classList.remove("openMenu");
  });
});

const heading = document.getElementById("heading");
const btn = document.getElementById("btn");

let value = 0;
btn.addEventListener("click", () => {
  if (value == 0) {
    setTimeout(()=>{
      heading.innerHTML = "Friends";
      btn.innerHTML = "Friend";
      btn.style.color = "#fff";
      btn.style.backgroundColor = "green";
      heading.style.color = "green";
      value = 1;
    },3000)
  } else {
    heading.innerHTML = "Unfollow";
    heading.style.color = "red";
    btn.innerHTML = "Unfollow";
    btn.style.color = "black";
    btn.style.backgroundColor = "#f1dada";
    value = 0;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let count = document.getElementById("count");
  let incresebtn = document.getElementById("incresebtn");
  let decresebtn = document.getElementById("decresebtn");

  let countValue = parseInt(localStorage.getItem("countValue")) || 0;
  count.textContent = countValue;

  function updateCount(newValue) {
    countValue = newValue;
    count.textContent = countValue;

    localStorage.setItem("countValue", countValue);
  }

  incresebtn.addEventListener("click", () => {
    if (countValue == 0) {
      updateCount(countValue += 1);
    }
  });

  decresebtn.addEventListener("click", () => {
    if (countValue > 0) {
      updateCount(countValue - 1);
    }
  });
});


let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);

}