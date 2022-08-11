const playTime = document.querySelector(".play_time");
const playBoard = document.querySelector(".tiles");
const completeMsg = document.querySelector(".complete_msg");
const startBtn = document.querySelector(".start_btn");
const cheetBtn = document.querySelector(".cheet_btn");

const tileCount = 16


// functions

// Load random 400*400 image and shuffle after 3 sec
function setGame() {
  const tempArr = [];
  Array(tileCount).fill().forEach( (_, index) => {
    const li = document.createElement('li');
    li.setAttribute('draggable', true);
    li.setAttribute('idx', index);
    li.classList.add(`tile${index}`);
    tempArr.push(li);
  });
  tempArr.forEach( (li) => {
    playBoard.appendChild(li);
  });
  console.log(playBoard);
  const suffledArr = suffle(tempArr);
  setTimeout( () => {
    playBoard.innerHTML = null;
    suffledArr.forEach( (li) => {
      playBoard.appendChild(li);
    })
  }, 3000);
}

// Shuffle image
function suffle(arr) {
  arr.forEach( (li, idx, arr) => {
    let randomIdx = Math.floor(Math.random() * tileCount);
    [arr[idx], arr[randomIdx]] = [arr[randomIdx], arr[idx]];
  });
  return arr;
}


// events
// let draggingTile = {};

// document.addEventListener('dragstart', (e) => {
//   draggingTile['idx'] = [...e.target.parentNode.childNodes].indexOf(e.target);
//   draggingTile['class'] = e.target.className;
//   console.log(e)
//   console.log(draggingTile);
// });
// document.addEventListener('dragover', (e) => {
//   e.preventDefault();
// });
// document.addEventListener('drop', (e) => {
//   console.log(e);
//   // idxDropped = [...e.target.parentNode.childNodes].indexOf(e.target)
//   // if (draggingTile.idx)
//   e.target.before(draggingTile);
// });
// // startBtn.addEventListener('click', setGame());

// body

setGame();