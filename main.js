const playTime = document.querySelector(".play_time");
const playBoard = document.querySelector(".tiles");
const completeMsg = document.querySelector(".complete_msg");
const startBtn = document.querySelector(".start_btn");
const cheetBtn = document.querySelector(".cheet_btn");

const tileCount = 16

/*
 * functions
 */

// Load random 400*400 image and shuffle after 3 sec
function setGame() {
  playBoard.innerHTML = null;
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

// function timer() {
//   playTime.setTimeout( () => {

//   }, 1000)
// }


/*
 * events
 */

let dragTileData = {};

document.addEventListener('dragstart', (e) => {
  dragTileData['idx'] = [...e.target.parentNode.children].indexOf(e.target);
  dragTileData['class'] = e.target.className;
  console.log(e);
  console.log(dragTileData);
});
document.addEventListener('dragover', (e) => {
  e.preventDefault();
});
document.addEventListener('drop', (e) => {
  const ulArray = [...e.target.parentNode.children]
  // console.log(e.target.getAttribute('idx'));
  droppedTileIdx = ulArray.indexOf(e.target);
  draggedTile = ulArray[dragTileData.idx];
  
  if (dragTileData.idx > droppedTileIdx) {
    e.target.before(draggedTile);
    // [ulArray[dragTileData.idx], ulArray[droppedTileIdx]] = [ulArray[droppedTileIdx], ulArray[dragTileData.idx]]
  } else if (dragTileData.idx < droppedTileIdx) {
    e.target.after(draggedTile);
    // droppedTile을 출발한 위치로 이동
  }
  console.log(e);
});
startBtn.addEventListener('click', setGame);

setGame();