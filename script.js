function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // x,y, width, hieght
    // center tower
    ctx.strokeRect(79, 100, 45, 70); //lower
    ctx.strokeRect(75, 89, 52, 10); //lower cap

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


    ctx.strokeRect(92, 28, 20, 60); //upper
    ctx.beginPath();
    ctx.moveTo(88, 14);
    ctx.lineTo(93, 14);
    ctx.lineTo(93, 18);
    ctx.lineTo(97, 18);
    ctx.lineTo(97, 14);
    ctx.lineTo(99, 14);
    ctx.lineTo(99, 14);
    ctx.lineTo(104, 14);
    ctx.lineTo(105, 14);
    ctx.lineTo(105, 18);
    ctx.lineTo(110, 18);
    ctx.lineTo(110, 14);
    ctx.lineTo(112, 14);
    ctx.lineTo(112, 18);
    ctx.lineTo(116, 18);
    ctx.lineTo(116, 14);
    ctx.lineTo(116, 27);
    ctx.lineTo(88, 27);
    ctx.closePath();
    ctx.stroke();
    // ctx.strokeRect(89, 13, 26, 14); //upper cap

    // middle towers
    ctx.strokeRect(37, 130, 40, 40); //left
    ctx.strokeRect(37, 114, 40, 14); // left cap

    ctx.strokeRect(126, 130, 40, 40); //right
    ctx.strokeRect(126, 114, 40, 14); //right cap

    // center left tower side
    ctx.beginPath();
    ctx.moveTo(69, 115);
    ctx.lineTo(69, 60);
    ctx.lineTo(93, 60);
    // center right tower side
    ctx.moveTo(135, 115);
    ctx.lineTo(135, 60);
    ctx.lineTo(113, 60);
    ctx.stroke();

    ctx.strokeRect(69, 45, 23, 14); // center left tower cap
    ctx.strokeRect(113, 45, 23, 14); // center right tower cap

    // center outer top towers
    ctx.strokeRect(69, 29, 10, 15); // left
    // left cap
    ctx.beginPath();
    ctx.moveTo(67, 22);
    ctx.lineTo(70, 22);
    ctx.lineTo(70, 25);
    ctx.lineTo(74, 25);
    ctx.lineTo(74, 22);
    ctx.lineTo(78, 22);
    ctx.lineTo(78, 25);
    ctx.lineTo(80, 25);
    ctx.lineTo(81, 22);
    ctx.lineTo(81, 30);
    ctx.lineTo(67, 30);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeRect(126, 29, 10, 15); // right
    // ctx.strokeRect(124, 22, 14, 5); // right cap
    ctx.beginPath();
    ctx.moveTo(124, 22);
    ctx.lineTo(127, 22);
    ctx.lineTo(127, 25);
    ctx.lineTo(131, 25);
    ctx.lineTo(131, 22);
    ctx.lineTo(135, 22);
    ctx.lineTo(135, 25);
    ctx.lineTo(137, 25);
    ctx.lineTo(138, 22);
    ctx.lineTo(138, 30);
    ctx.lineTo(124, 30);
    ctx.closePath();
    ctx.stroke();

    // outer towers
    ctx.strokeRect(10, 105, 25, 65); //lower left
    ctx.strokeRect(7, 89, 32, 14); // lower left cap

    ctx.strokeRect(40, 73, 20, 40); // upper left
    ctx.strokeRect(37, 57, 26, 14); // upper left cap

    ctx.strokeRect(168, 105, 25, 65); //lower right
    ctx.strokeRect(165, 89, 32, 14); // lower right cap

    ctx.strokeRect(145, 73, 20, 40); //upper right
    ctx.strokeRect(142, 57, 26, 14); // upper right cap
  }
}
window.addEventListener("load", draw);

// todo
// function drawPillar() {

// }
