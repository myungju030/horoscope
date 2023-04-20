import { useEffect } from "react";

export default function Taurus() {
  useEffect(() => {
    var canvas = document.getElementById("taurus");
    var ctx = canvas.getContext("2d");

    //황소자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(70, 50, 10, 10);
    ctx.fillRect(60, 40, 10, 10);
    ctx.fillRect(60, 30, 10, 10);
    ctx.fillRect(70, 20, 10, 10);

    ctx.fillRect(120, 50, 10, 10);
    ctx.fillRect(130, 40, 10, 10);
    ctx.fillRect(130, 30, 10, 10);
    ctx.fillRect(120, 20, 10, 10);

    ctx.fillRect(50, 60, 10, 10);
    ctx.fillRect(40, 50, 10, 10);
    ctx.fillRect(30, 60, 10, 10);
    ctx.fillRect(30, 70, 10, 10);
    ctx.fillRect(40, 80, 10, 10);

    ctx.fillRect(140, 60, 10, 10);
    ctx.fillRect(150, 50, 10, 10);
    ctx.fillRect(160, 60, 10, 10);
    ctx.fillRect(160, 70, 10, 10);
    ctx.fillRect(150, 80, 10, 10);

    ctx.fillRect(60, 70, 10, 10);
    ctx.fillRect(70, 70, 10, 10);
    ctx.fillRect(80, 70, 10, 10);
    ctx.fillRect(90, 70, 10, 10);
    ctx.fillRect(100, 70, 10, 10);
    ctx.fillRect(110, 70, 10, 10);
    ctx.fillRect(120, 70, 10, 10);
    ctx.fillRect(130, 70, 10, 10);

    ctx.fillRect(60, 120, 10, 10);
    ctx.fillRect(60, 110, 10, 10);
    ctx.fillRect(50, 100, 10, 10);
    ctx.fillRect(50, 90, 10, 10);
    ctx.fillRect(50, 80, 10, 10);

    ctx.fillRect(140, 80, 10, 10);
    ctx.fillRect(140, 90, 10, 10);
    ctx.fillRect(140, 100, 10, 10);
    ctx.fillRect(130, 110, 10, 10);
    ctx.fillRect(130, 120, 10, 10);
    ctx.fillRect(120, 130, 10, 10);
    ctx.fillRect(110, 130, 10, 10);
    ctx.fillRect(100, 130, 10, 10);
    ctx.fillRect(90, 130, 10, 10);
    ctx.fillRect(80, 130, 10, 10);
    ctx.fillRect(70, 130, 10, 10);

    ctx.fillRect(130, 140, 10, 10);
    ctx.fillRect(130, 150, 10, 10);
    ctx.fillRect(120, 160, 10, 10);
    ctx.fillRect(110, 160, 10, 10);
    ctx.fillRect(100, 160, 10, 10);
    ctx.fillRect(90, 160, 10, 10);
    ctx.fillRect(80, 160, 10, 10);
    ctx.fillRect(70, 160, 10, 10);
    ctx.fillRect(60, 150, 10, 10);
    ctx.fillRect(60, 140, 10, 10);

    ctx.fillRect(80, 90, 10, 10);
    ctx.fillRect(110, 90, 10, 10);
  });
  return (
    <canvas id="taurus" width="200px" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
