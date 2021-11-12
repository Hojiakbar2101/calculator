let p = document.querySelector(".p");
let dis = document.querySelectorAll(".dis");
let btns = document.querySelectorAll(".btn");
let equa = document.querySelector(".equa");
let arr = [];
setTimeout(() => {
  document.querySelector(".h1").style.display = "none";
}, 2500);
if (arr.length === 0) {
  dis.forEach((item) => {
    item.setAttribute("disabled", true);
    item.classList.add("disabled");
  });
}
btns.forEach((item, i) => {
  item.addEventListener("click", () => {
    let text = item.innerText;
    if (arr === [] && text === "0") {
      dis.forEach((item) => {
        item.setAttribute("disabled", true);
        item.classList.add("disabled");
      });
    }
    if (text === "AC") {
      arr = [];
      text = "";
    }
    if (text != "=") {
      arr.push(text);
    }
    equal();
    draw();
    check();
    if (item.innerText === "AC") {
      p.innerText = "0";
    }
  });
});
function draw() {
  let str = "";
  if (arr[0] === "0") {
    arr.splice(0, 1);
  }
  if (arr.length === 0) {
    dis.forEach((item) => {
      item.setAttribute("disabled", true);
      item.classList.add("disabled");
    });
  }
  arr.forEach((item) => {
    if (item === "") {
      arr.pop();
      arr.pop();
      draw();
    } else {
      str += item;
    }
  });
  p.innerText = str;
}
function check() {
  arr.forEach((item, i) => {
    if (item === "+" || item === "-" || item === "/" || item === "*") {
      dis.forEach((item) => {
        item.setAttribute("disabled", true);
        item.classList.add("disabled");
      });
    } else {
      dis.forEach((item) => {
        item.removeAttribute("disabled");
        item.classList.remove("disabled");
      });
    }
    draw();
  });
}
function equal() {
  equa.addEventListener("click", () => {
    teng();
  });
}
function teng() {
  let val = document.querySelector(".p").innerText;
  let result = eval(val);
  document.querySelector(".p").innerText = result;
  arr = [result];
}
window.addEventListener("keyup", (e) => {
  let key = e.key;
  if (arr.length != 0 && key === "=") {
    teng();
  }
  if (key === "Backspace") {
    arr.pop();
    check();
    draw();
  }
  if (arr.length === 0 && key === ".") {
    key = "";
  }
  if (key === "+" || key === "-" || key === "/" || key === "*") {
    if (
      arr[arr.length - 1] === "+" ||
      arr[arr.length - 1] === "-" ||
      arr[arr.length - 1] === "*" ||
      arr[arr.length - 1] === "/"
    ) {
      key = "";
    }
  }
  if (
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7" ||
    key === "8" ||
    key === "9" ||
    key === "0" ||
    key === "*" ||
    key === "-" ||
    key === "/" ||
    key === "+" ||
    key === "."
  ) {
    if (
      key === "1" ||
      key === "2" ||
      key === "3" ||
      key === "4" ||
      key === "5" ||
      key === "6" ||
      key === "7" ||
      key === "8" ||
      key === "9"
    ) {
      arr.push(e.key);
    }
    if (
      arr[arr.length - 1] != key &&
      arr[arr.length - 1] != key &&
      arr[arr.length - 1] != key &&
      arr[arr.length - 1] != key
    ) {
      if (key != "") {
        arr.push(e.key);
      }
    }
    draw();
    check();
  }
});
