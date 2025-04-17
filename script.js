function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    drawCenterTower(ctx);
    drawMiddleTowers(ctx);
    drawOuterTowers(ctx);
  }
}

function drawCenterTower(ctx) {
  // Lower section
  ctx.strokeRect(79, 100, 45, 70);
  ctx.strokeRect(75, 89, 52, 10);

  // Door
  ctx.beginPath();
  ctx.moveTo(116, 140);
  ctx.lineTo(102, 130);
  ctx.lineTo(88, 140);
  ctx.lineTo(88, 170);
  ctx.lineTo(116, 170);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(102, 130);
  ctx.lineTo(102, 170);
  ctx.stroke();

  // Upper section
  ctx.strokeRect(92, 28, 20, 60);
  drawBattlements(ctx, 88, 14);
}

function drawMiddleTowers(ctx) {
  // Left tower
  ctx.strokeRect(37, 130, 40, 40);
  ctx.strokeRect(37, 114, 40, 14);

  // Right tower
  ctx.strokeRect(126, 130, 40, 40);
  ctx.strokeRect(126, 114, 40, 14);

  // Connecting walls
  drawConnectingWall(ctx, 69, 115, 69, 60, 93, 60);
  drawConnectingWall(ctx, 135, 115, 135, 60, 113, 60);

  // Tower caps
  ctx.strokeRect(69, 45, 23, 14);
  ctx.strokeRect(113, 45, 23, 14);

  // Outer top towers
  drawSmallTower(ctx, 69, 29, 67, 22);
  drawSmallTower(ctx, 126, 29, 124, 22);
}

function drawOuterTowers(ctx) {
  // Left side
  ctx.strokeRect(10, 105, 25, 65);
  ctx.strokeRect(7, 89, 32, 14);

  // Middle left side
  ctx.strokeRect(40, 73, 20, 40);
  drawBattlements(ctx, 36, 59);

  // Right side
  ctx.strokeRect(168, 105, 25, 65);
  ctx.strokeRect(165, 89, 32, 14);

  // Middle right side
  ctx.strokeRect(145, 73, 20, 40);
  drawBattlements(ctx, 141, 59);
}

function drawConnectingWall(ctx, startX, startY, midX, midY, endX, endY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(midX, midY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}


function drawBattlements(ctx, x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 5, y);
  ctx.lineTo(x + 5, y + 4);
  ctx.lineTo(x + 9, y + 4);
  ctx.lineTo(x + 9, y);
  ctx.lineTo(x + 11, y);
  ctx.lineTo(x + 16, y);
  ctx.lineTo(x + 17, y);
  ctx.lineTo(x + 17, y + 4);
  ctx.lineTo(x + 22, y + 4);
  ctx.lineTo(x + 22, y);
  ctx.lineTo(x + 24, y);
  ctx.lineTo(x + 24, y + 4);
  ctx.lineTo(x + 28, y + 4);
  ctx.lineTo(x + 28, y);
  ctx.lineTo(x + 28, y + 13);
  ctx.lineTo(x, y + 13);
  ctx.closePath();
  ctx.stroke();
}

function drawSmallTower(ctx, towerX, towerY, battlementX, battlementY) {
  ctx.strokeRect(towerX, towerY, 10, 15);
  drawSmallBattlements(ctx, battlementX, battlementY);
}

function drawSmallBattlements(ctx, x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 3, y);
  ctx.lineTo(x + 3, y + 3);
  ctx.lineTo(x + 7, y + 3);
  ctx.lineTo(x + 7, y);
  ctx.lineTo(x + 11, y);
  ctx.lineTo(x + 11, y + 3);
  ctx.lineTo(x + 13, y + 3);
  ctx.lineTo(x + 14, y);
  ctx.lineTo(x + 14, y + 8);
  ctx.lineTo(x, y + 8);
  ctx.closePath();
  ctx.stroke();
}

window.addEventListener("load", draw);
