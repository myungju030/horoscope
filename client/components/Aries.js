import { useEffect } from "react";

export default function Aries() {
  useEffect(() => {
    var canvas = document.getElementById("aries");
    var ctx = canvas.getContext("2d");

    //양자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(40, 70, 10, 10);
    ctx.fillRect(40, 60, 10, 10);
    ctx.fillRect(50, 50, 10, 10);
    ctx.fillRect(60, 40, 10, 10);
    ctx.fillRect(70, 40, 10, 10);
    ctx.fillRect(80, 30, 10, 10);
    ctx.fillRect(90, 30, 10, 10);
    ctx.fillRect(100, 30, 10, 10);
    ctx.fillRect(110, 30, 10, 10);
    ctx.fillRect(120, 40, 10, 10);
    ctx.fillRect(130, 40, 10, 10);
    ctx.fillRect(140, 50, 10, 10);
    ctx.fillRect(150, 60, 10, 10);
    ctx.fillRect(150, 70, 10, 10);

    ctx.fillRect(150, 120, 10, 10);
    ctx.fillRect(150, 130, 10, 10);
    ctx.fillRect(140, 140, 10, 10);
    ctx.fillRect(130, 150, 10, 10);
    ctx.fillRect(120, 150, 10, 10);
    ctx.fillRect(110, 160, 10, 10);
    ctx.fillRect(100, 160, 10, 10);
    ctx.fillRect(90, 160, 10, 10);
    ctx.fillRect(80, 160, 10, 10);
    ctx.fillRect(70, 150, 10, 10);
    ctx.fillRect(60, 150, 10, 10);
    ctx.fillRect(50, 140, 10, 10);
    ctx.fillRect(40, 130, 10, 10);
    ctx.fillRect(30, 120, 10, 10);

    ctx.fillRect(140, 80, 10, 10);
    ctx.fillRect(150, 80, 10, 10);
    ctx.fillRect(160, 80, 10, 10);
    ctx.fillRect(170, 90, 10, 10);
    ctx.fillRect(170, 100, 10, 10);
    ctx.fillRect(160, 110, 10, 10);
    ctx.fillRect(150, 100, 10, 10);

    ctx.fillRect(50, 80, 10, 10);
    ctx.fillRect(40, 80, 10, 10);
    ctx.fillRect(30, 80, 10, 10);
    ctx.fillRect(20, 90, 10, 10);
    ctx.fillRect(20, 100, 10, 10);
    ctx.fillRect(30, 110, 10, 10);
    ctx.fillRect(40, 100, 10, 10);

    ctx.fillRect(70, 60, 10, 10);
    ctx.fillRect(80, 70, 10, 10);
    ctx.fillRect(90, 60, 10, 10);
    ctx.fillRect(100, 70, 10, 10);
    ctx.fillRect(110, 60, 10, 10);
    ctx.fillRect(120, 70, 10, 10);

    ctx.fillRect(80, 100, 10, 10);
    ctx.fillRect(110, 100, 10, 10);

    ctx.fillRect(80, 130, 10, 10);
    ctx.fillRect(90, 120, 10, 10);
    ctx.fillRect(100, 120, 10, 10);
    ctx.fillRect(110, 130, 10, 10);
  });
  return (
    <canvas id="aries" width="200" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
