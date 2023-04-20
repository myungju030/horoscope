import { useEffect } from "react";

export default function Cancer() {
  useEffect(() => {
    var canvas = document.getElementById("cancer");
    var ctx = canvas.getContext("2d");

    //게자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(70, 60, 10, 10);
    ctx.fillRect(110, 60, 10, 10);
    ctx.fillRect(50, 80, 10, 10);
    ctx.fillRect(60, 70, 10, 10);
    ctx.fillRect(70, 70, 10, 10);
    ctx.fillRect(80, 70, 10, 10);
    ctx.fillRect(90, 70, 10, 10);
    ctx.fillRect(100, 70, 10, 10);
    ctx.fillRect(110, 70, 10, 10);
    ctx.fillRect(120, 70, 10, 10);
    ctx.fillRect(120, 70, 10, 10);
    ctx.fillRect(130, 80, 10, 10);
    ctx.fillRect(130, 80, 10, 10);
    ctx.fillRect(140, 90, 10, 10);
    ctx.fillRect(140, 100, 10, 10);
    ctx.fillRect(140, 110, 10, 10);
    ctx.fillRect(140, 120, 10, 10);
    ctx.fillRect(130, 130, 10, 10);
    ctx.fillRect(130, 130, 10, 10);
    ctx.fillRect(120, 140, 10, 10);
    ctx.fillRect(110, 140, 10, 10);
    ctx.fillRect(100, 140, 10, 10);
    ctx.fillRect(90, 140, 10, 10);
    ctx.fillRect(80, 140, 10, 10);
    ctx.fillRect(70, 140, 10, 10);
    ctx.fillRect(60, 140, 10, 10);
    ctx.fillRect(50, 130, 10, 10);
    ctx.fillRect(40, 120, 10, 10);
    ctx.fillRect(40, 110, 10, 10);
    ctx.fillRect(40, 100, 10, 10);
    ctx.fillRect(40, 90, 10, 10);
    ctx.fillRect(140, 140, 10, 10);
    ctx.fillRect(150, 150, 10, 10);
    ctx.fillRect(40, 140, 10, 10);
    ctx.fillRect(30, 150, 10, 10);
    ctx.fillRect(30, 150, 10, 10);
    ctx.fillRect(30, 110, 10, 10);
    ctx.fillRect(20, 110, 10, 10);
    ctx.fillRect(10, 100, 10, 10);
    ctx.fillRect(30, 70, 10, 10);
    ctx.fillRect(20, 60, 10, 10);
    ctx.fillRect(20, 50, 10, 10);
    ctx.fillRect(30, 40, 10, 10);
    ctx.fillRect(40, 30, 10, 10);
    ctx.fillRect(40, 50, 10, 10);
    ctx.fillRect(150, 110, 10, 10);
    ctx.fillRect(160, 110, 10, 10);
    ctx.fillRect(170, 100, 10, 10);
    ctx.fillRect(150, 70, 10, 10);
    ctx.fillRect(160, 60, 10, 10);
    ctx.fillRect(160, 50, 10, 10);
    ctx.fillRect(150, 40, 10, 10);
    ctx.fillRect(140, 30, 10, 10);
    ctx.fillRect(140, 50, 10, 10);
  });
  return (
    <canvas id="cancer" width="200" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
