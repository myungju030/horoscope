import { useEffect } from "react";

export default function Pisces() {
  useEffect(() => {
    var canvas = document.getElementById("pisces");
    var ctx = canvas.getContext("2d");

    //물고기자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(50, 80, 10, 10);
    ctx.fillRect(60, 70, 10, 10);
    ctx.fillRect(70, 70, 10, 10);
    ctx.fillRect(80, 60, 10, 10);
    ctx.fillRect(90, 60, 10, 10);
    ctx.fillRect(100, 60, 10, 10);
    ctx.fillRect(110, 60, 10, 10);
    ctx.fillRect(120, 70, 10, 10);
    ctx.fillRect(130, 80, 10, 10);
    ctx.fillRect(140, 90, 10, 10);
    ctx.fillRect(150, 80, 10, 10);
    ctx.fillRect(160, 90, 10, 10);
    ctx.fillRect(160, 100, 10, 10);
    ctx.fillRect(160, 110, 10, 10);
    ctx.fillRect(160, 120, 10, 10);
    ctx.fillRect(150, 130, 10, 10);
    ctx.fillRect(140, 120, 10, 10);
    ctx.fillRect(130, 120, 10, 10);
    ctx.fillRect(120, 130, 10, 10);
    ctx.fillRect(110, 140, 10, 10);
    ctx.fillRect(100, 140, 10, 10);
    ctx.fillRect(90, 140, 10, 10);
    ctx.fillRect(80, 140, 10, 10);
    ctx.fillRect(70, 140, 10, 10);
    ctx.fillRect(60, 130, 10, 10);
    ctx.fillRect(50, 120, 10, 10);
    ctx.fillRect(40, 110, 10, 10);
    ctx.fillRect(40, 100, 10, 10);
    ctx.fillRect(40, 90, 10, 10);
    ctx.fillRect(70, 100, 10, 10);

    ctx.fillRect(20, 80, 10, 10);
    ctx.fillRect(30, 60, 10, 10);
    ctx.fillRect(20, 40, 10, 10);
    ctx.fillRect(40, 20, 10, 10);
  });
  return (
    <canvas id="pisces" width="200" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
