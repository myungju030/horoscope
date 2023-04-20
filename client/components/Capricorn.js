import { useEffect } from "react";

export default function Capricorn() {
  useEffect(() => {
    var canvas = document.getElementById("capricorn");
    var ctx = canvas.getContext("2d");

    //염소자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(50, 40, 10, 10);
    ctx.fillRect(60, 50, 10, 20);
    ctx.fillRect(130, 40, 10, 10);
    ctx.fillRect(120, 50, 10, 20);
    ctx.fillRect(50, 70, 90, 10);
    ctx.fillRect(40, 80, 10, 20);
    ctx.fillRect(30, 90, 10, 20);
    ctx.fillRect(20, 110, 10, 10);
    ctx.fillRect(140, 80, 10, 20);
    ctx.fillRect(50, 100, 10, 20);
    ctx.fillRect(130, 100, 10, 20);
    ctx.fillRect(150, 90, 10, 20);
    ctx.fillRect(160, 110, 10, 10);
    ctx.fillRect(60, 120, 10, 20);
    ctx.fillRect(75, 110, 5, 10);
    ctx.fillRect(110, 110, 5, 10);
    ctx.fillRect(95, 130, 2.5, 20);
    ctx.fillRect(94, 150, 2.5, 2.5);
    ctx.fillRect(93, 152, 2.5, 2.5);
    ctx.fillRect(92, 154, 2.5, 2.5);
    ctx.fillRect(97, 150, 2.5, 2.5);
    ctx.fillRect(98, 152, 2.5, 2.5);
    ctx.fillRect(99, 154, 2.5, 2.5);
    ctx.fillRect(120, 120, 10, 20);
    ctx.fillRect(70, 140, 10, 20);
    ctx.fillRect(110, 140, 10, 20);
    ctx.fillRect(80, 160, 30, 10);
  });
  return (
    <canvas id="capricorn" width="200" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
