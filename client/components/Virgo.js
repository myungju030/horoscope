import { useEffect } from "react";

export default function Virgo() {
  useEffect(() => {
    var canvas = document.getElementById("virgo");
    var ctx = canvas.getContext("2d");

    //처녀자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(40, 40, 100, 10);
    ctx.fillRect(40, 60, 10, 10);
    ctx.fillRect(40, 40, 100, 10);
    ctx.fillRect(50, 100, 10, 10);
    ctx.fillRect(50, 70, 10, 10);
    ctx.fillRect(60, 80, 40, 10);
    ctx.fillRect(100, 90, 10, 0);
    ctx.fillRect(90, 100, 10, 30);
    ctx.fillRect(30, 50, 10, 100);
    ctx.fillRect(140, 40, 10, 100);
    ctx.fillRect(40, 150, 100, 10);
    ctx.fillRect(90, 130, 10, 10);
    ctx.fillRect(80, 140, 10, 10);
    ctx.fillRect(150, 140, 10, 10);
    ctx.fillRect(160, 130, 10, 10);
  });
  return (
    <canvas id="virgo" width="200px" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
