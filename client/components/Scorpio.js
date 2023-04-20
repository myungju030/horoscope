import { useEffect } from "react";

export default function Scorpio() {
  useEffect(() => {
    var canvas = document.getElementById("scorpio");
    var ctx = canvas.getContext("2d");

    //전갈자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(70, 60, 10, 10);
    ctx.fillRect(115, 60, 10, 10);
    ctx.fillRect(55, 80, 10, 10);
    ctx.fillRect(65, 70, 10, 10);
    ctx.fillRect(75, 70, 10, 10);
    ctx.fillRect(85, 70, 10, 10);
    ctx.fillRect(95, 70, 10, 10);
    ctx.fillRect(105, 70, 10, 10);
    ctx.fillRect(115, 70, 10, 10);
    ctx.fillRect(125, 70, 10, 10);
    ctx.fillRect(125, 70, 10, 10);
    ctx.fillRect(135, 80, 10, 10);
    ctx.fillRect(135, 80, 10, 10);
    ctx.fillRect(145, 90, 10, 10);
    ctx.fillRect(145, 100, 10, 10);
    ctx.fillRect(145, 110, 10, 10);
    ctx.fillRect(145, 120, 10, 10);
    ctx.fillRect(135, 130, 10, 10);
    ctx.fillRect(135, 130, 10, 10);
    ctx.fillRect(125, 140, 10, 10);
    ctx.fillRect(115, 140, 10, 10);
    ctx.fillRect(105, 140, 10, 10);
    ctx.fillRect(95, 140, 10, 10);
    ctx.fillRect(85, 140, 10, 10);
    ctx.fillRect(75, 140, 10, 10);
    ctx.fillRect(65, 140, 10, 10);
    ctx.fillRect(55, 130, 10, 10);
    ctx.fillRect(45, 120, 10, 10);
    ctx.fillRect(45, 110, 10, 10);
    ctx.fillRect(45, 100, 10, 10);
    ctx.fillRect(45, 90, 10, 10);
    ctx.fillRect(45, 140, 10, 10);
    ctx.fillRect(55, 150, 10, 10);
    ctx.fillRect(45, 140, 10, 10);
    ctx.fillRect(35, 150, 10, 10);
    ctx.fillRect(35, 150, 10, 10);
    ctx.fillRect(35, 110, 10, 10);
    ctx.fillRect(25, 110, 10, 10);
    ctx.fillRect(15, 100, 10, 10);
    ctx.fillRect(35, 70, 10, 10);
    ctx.fillRect(25, 60, 10, 10);
    ctx.fillRect(25, 10, 10, 10);
    ctx.fillRect(35, 40, 10, 10);
    ctx.fillRect(45, 30, 10, 10);
    ctx.fillRect(45, 10, 10, 10);
    ctx.fillRect(155, 110, 10, 10);
    ctx.fillRect(165, 110, 10, 10);
    ctx.fillRect(175, 100, 10, 10);
    ctx.fillRect(155, 70, 10, 10);
    ctx.fillRect(165, 60, 10, 10);
    ctx.fillRect(165, 10, 10, 10);
    ctx.fillRect(155, 40, 10, 10);
    ctx.fillRect(145, 30, 10, 10);
    ctx.fillRect(145, 10, 10, 10);
    ctx.fillRect(75, 150, 10, 20);
    ctx.fillRect(115, 150, 10, 20);
    ctx.fillRect(85, 170, 30, 10);
    ctx.fillRect(95, 180, 20, 10);
    ctx.fillRect(115, 190, 10, 10);
    ctx.fillRect(125, 200, 10, 10);
    ctx.fillRect(135, 190, 10, 10);
  });
  return (
    <canvas id="scorpio" width="200" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
