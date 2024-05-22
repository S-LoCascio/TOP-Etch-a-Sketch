/* const box1 = document.createElement(`div`);
box1.className = `box1`;
box1.style.height = `100px`;
box1.style.width = `100px`;
box1.style.color = `red`;
container.appendChild(box1);

const box2 = document.createElement(`div`);
box1.className = `box2`;
box1.style.height = `100px`;
box1.style.width = `100px`;
box1.style.color = `blue`;
container.appendChild(box2);
 */

function createSquares(num) {
  let container = document.querySelector(`.container`);
  container.style.display = `flex`;

  let amount = num * num;
  for (let i = 0; i < amount; i++) {
    let pixel = document.createElement(`div`);
    pixel.style.flex = `1`;
    container.appendChild(pixel);
  }
}

pixels = createSquares(16);
