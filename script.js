let svg = document.getElementById("canvas");
let color = document.getElementById("color");
let undo = document.getElementById("undo");

let drawing = false;
let line;
let elements = [];

svg.onmousedown = function (e) {
  drawing = true;

  line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", e.offsetX);
  line.setAttribute("y1", e.offsetY);
  line.setAttribute("x2", e.offsetX);
  line.setAttribute("y2", e.offsetY);
  line.setAttribute("stroke", color.value);
  line.setAttribute("stroke-width", 2);

  svg.appendChild(line);
  elements.push(line);
};

svg.onmousemove = function (e) {
  if (drawing) {
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
  }
};

svg.onmouseup = function () {
  drawing = false;
};

undo.onclick = function () {
  let last = elements.pop();
  if (last) {
    svg.removeChild(last);
  }
};

