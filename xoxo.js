console.log("Inside JS file");

var player = "O";
const cellIndex = ["", "", "", "", "", "", "", "", ""];
const winnig_combination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function winnerValidation() {
  for (var check = 0; check <= winnig_combination.length; check++) {
    let combination = winnig_combination[check];

    let a = cellIndex[combination[0]];
    let b = cellIndex[combination[1]];
    let c = cellIndex[combination[2]];

    if (a == "" || b == "" || c == "") {
      continue;
    }
    if (a === b && b === c) {
      alert("Player " + a + " Winner");
      console.log(a);
      console.log(b);
      console.log(c);
    }
  }
}

function cellClicking(click_cell) {
  let cell = click_cell.target;
  let cell_index = Number(cell.getAttribute("id"));
  console.log(cell_index);

  if (cellIndex[cell_index] == "") {
    if (player === "X" || player === "x") {
      console.log("Inside if >>>");
      cell.innerHTML = "X";
      cellIndex[cell_index] = player;
      console.log(cellIndex);
      player = "O";
      console.log(player);
    } else if (player === "O" || player === "o") {
      console.log("Inside else");
      cell.innerHTML = "O";
      cellIndex[cell_index] = player;
      player = "x";
      console.log(player);
    }
  } else {
    alert("Cell already Selected");
  }
  winnerValidation();
}

document.querySelectorAll(".cell").forEach((cell) => cell.addEventListener("click", cellClicking));
