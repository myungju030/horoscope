import { useEffect } from "react";

export default function Leo() {
  useEffect(() => {
    var canvas = document.getElementById("leo");
    var ctx = canvas.getContext("2d");

    //사자자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(60, 70, 10, 10);
    ctx.fillRect(70, 60, 10, 10);
    ctx.fillRect(80, 60, 10, 10);
    ctx.fillRect(90, 60, 10, 10);
    ctx.fillRect(100, 60, 10, 10);
    ctx.fillRect(110, 60, 10, 10);
    ctx.fillRect(120, 70, 10, 10);
    ctx.fillRect(120, 70, 10, 10);
    ctx.fillRect(130, 90, 10, 10);
    ctx.fillRect(130, 100, 10, 10);
    ctx.fillRect(130, 110, 10, 10);
    ctx.fillRect(120, 120, 10, 10);
    ctx.fillRect(120, 120, 10, 10);
    ctx.fillRect(110, 130, 10, 10);
    ctx.fillRect(110, 130, 10, 10);
    ctx.fillRect(100, 130, 10, 10);
    ctx.fillRect(90, 130, 10, 10);
    ctx.fillRect(80, 130, 10, 10);
    ctx.fillRect(70, 130, 10, 10);
    ctx.fillRect(60, 120, 10, 10);
    ctx.fillRect(50, 110, 10, 10);
    ctx.fillRect(50, 100, 10, 10);
    ctx.fillRect(50, 90, 10, 10);
    ctx.fillRect(40, 80, 10, 10);
    ctx.fillRect(30, 70, 10, 10);
    ctx.fillRect(30, 60, 10, 10);
    ctx.fillRect(40, 60, 10, 10);
    ctx.fillRect(50, 60, 10, 10);
    ctx.fillRect(130, 60, 10, 10);
    ctx.fillRect(140, 60, 10, 10);
    ctx.fillRect(150, 60, 10, 10);
    ctx.fillRect(150, 70, 10, 10);
    ctx.fillRect(140, 80, 10, 10);
    ctx.fillRect(110, 90, 10, 10);
    ctx.fillRect(70, 90, 10, 10);
    ctx.fillRect(90, 110, 10, 10);
    ctx.fillRect(160, 110, 10, 10);
    ctx.fillRect(160, 120, 10, 10);
    ctx.fillRect(150, 130, 10, 10);
    ctx.fillRect(140, 140, 10, 10);
    ctx.fillRect(130, 150, 10, 10);
    ctx.fillRect(120, 150, 10, 10);
    ctx.fillRect(110, 150, 10, 10);
    ctx.fillRect(100, 150, 10, 10);
    ctx.fillRect(90, 150, 10, 10);
    ctx.fillRect(80, 150, 10, 10);
    ctx.fillRect(70, 150, 10, 10);
    ctx.fillRect(60, 150, 10, 10);
    ctx.fillRect(50, 150, 10, 10);
    ctx.fillRect(40, 140, 10, 10);
    ctx.fillRect(30, 130, 10, 10);
    ctx.fillRect(20, 120, 10, 10);
    ctx.fillRect(20, 110, 10, 10);
    ctx.fillRect(20, 90, 10, 10);
    ctx.fillRect(20, 50, 10, 10);
    ctx.fillRect(30, 40, 10, 10);
    ctx.fillRect(40, 30, 10, 10);
    ctx.fillRect(50, 30, 10, 10);
    ctx.fillRect(60, 30, 10, 10);
    ctx.fillRect(70, 30, 10, 10);
    ctx.fillRect(80, 30, 10, 10);
    ctx.fillRect(90, 30, 10, 10);
    ctx.fillRect(100, 30, 10, 10);
    ctx.fillRect(110, 30, 10, 10);
    ctx.fillRect(120, 30, 10, 10);
    ctx.fillRect(130, 30, 10, 10);
    ctx.fillRect(130, 30, 10, 10);
    ctx.fillRect(140, 30, 10, 10);
    ctx.fillRect(150, 40, 10, 10);
    ctx.fillRect(160, 50, 10, 10);
    ctx.fillRect(160, 90, 10, 10);
  });
  return (
    <canvas id="leo" width="200px" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
