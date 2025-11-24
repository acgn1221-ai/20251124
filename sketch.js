// sketch.js - 顯示 1-7 與 1-4 精靈動畫（已移除 1-2）

// 第四個精靈：1-4/all.png (每格 118x142，共 22 幀)
let sprite4;
let frameW4 = 118;
let frameH4 = 142;
let totalFrames4 = 22;
let currentFrame4 = 0;
let lastUpdate4 = 0;
let fps4 = 12;
let frameDelay4 = 1000 / fps4;
let scaleFactor4 = 2; // 可調整顯示大小

// 第十個精靈：1-10/all.png (每格 94x113，共 8 幀)
let sprite10;
let frameW10 = 94;
let frameH10 = 113;
let totalFrames10 = 8;
let currentFrame10 = 0;
let lastUpdate10 = 0;
let fps10 = 12;
let frameDelay10 = 1000 / fps10;
let scaleFactor10 = 3; // 可調整顯示大小

function preload() {
  // 載入 1-4 與 1-7 的精靈表；已移除 1-2 的載入
  sprite4 = loadImage('1-4/all.png');
  sprite10 = loadImage('1-10/all.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
}

function draw() {
  background('#bde0fe');

  // 計算顯示大小（僅保留 1-10 與 1-4）
  let dispW10 = frameW10 * scaleFactor10;
  let dispH10 = frameH10 * scaleFactor10;
  let dispW4 = frameW4 * scaleFactor4;
  let dispH4 = frameH4 * scaleFactor4;

  // 將兩個精靈水平排列並群組置中（1-7 左，1-4 右）
  let spacing = 40;
  let totalW = dispW10 + spacing + dispW4;
  let left = (width - totalW) / 2;
  let dx10 = left;
  let dx4 = left + dispW10 + spacing;
  // 垂直位置各自置中
  let dy10 = (height - dispH10) / 2;
  let dy4 = (height - dispH4) / 2;

  // 更新精靈 10 幀
  if (millis() - lastUpdate10 > frameDelay10) {
    currentFrame10 = (currentFrame10 + 1) % totalFrames10;
    lastUpdate10 = millis();
  }

  // 更新精靈 4 幀
  if (millis() - lastUpdate4 > frameDelay4) {
    currentFrame4 = (currentFrame4 + 1) % totalFrames4;
    lastUpdate4 = millis();
  }

  // 計算來源偏移（假設水平排列）
  let sx10 = currentFrame10 * frameW10;
  let sx4 = currentFrame4 * frameW4;

  // 畫出精靈：1-10 在左，1-4 在右（群組置中）
  if (sprite10) image(sprite10, dx10, dy10, dispW10, dispH10, sx10, 0, frameW10, frameH10);
  if (sprite4) image(sprite4, dx4, dy4, dispW4, dispH4, sx4, 0, frameW4, frameH4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
