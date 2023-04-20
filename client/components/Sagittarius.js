import { useEffect } from "react";

export default function Sagittarius() {
  useEffect(() => {
    var canvas = document.getElementById("sagittarius");
    var ctx = canvas.getContext("2d");

    //궁수자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(70, 20, 60, 10);
    ctx.fillRect(60, 30, 10, 10);
    ctx.fillRect(50, 40, 10, 10);
    ctx.fillRect(40, 50, 10, 100);
    ctx.fillRect(90, 20, 10, 150);
    ctx.fillRect(50, 150, 10, 10);
    ctx.fillRect(60, 160, 10, 10);
    ctx.fillRect(70, 170, 60, 10);
    ctx.fillRect(-10, 100, 180, 10);
    ctx.fillRect(10, 80, 10, 10);
    ctx.fillRect(0, 90, 10, 10);
    ctx.fillRect(0, 110, 10, 10);
    ctx.fillRect(10, 120, 10, 10);
    ctx.fillRect(140, 110, 40, 10);
    ctx.fillRect(150, 120, 40, 10);
    ctx.fillRect(140, 90, 40, 10);
    ctx.fillRect(150, 80, 40, 10);
  });
  return (
    <canvas id="sagittarius" width="200" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
