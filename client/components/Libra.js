import { useEffect } from "react";

export default function Libra() {
  useEffect(() => {
    var canvas = document.getElementById("libra");
    var ctx = canvas.getContext("2d");

    //천칭자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(80, 40, 50, 30);
    ctx.fillRect(100, 70, 10, 100);
    ctx.fillRect(90, 140, 30, 10);
    ctx.fillRect(70, 150, 70, 20);
    ctx.fillRect(50, 50, 30, 10);
    ctx.fillRect(130, 50, 30, 10);
    ctx.fillRect(40, 60, 10, 10);
    ctx.fillRect(30, 70, 10, 40);
    ctx.fillRect(20, 110, 10, 10);
    ctx.fillRect(40, 110, 10, 10);
    ctx.fillRect(10, 120, 10, 10);
    ctx.fillRect(50, 120, 10, 10);
    ctx.fillRect(160, 60, 10, 10);
    ctx.fillRect(170, 70, 10, 40);
    ctx.fillRect(160, 110, 10, 10);
    ctx.fillRect(150, 120, 10, 10);
    ctx.fillRect(180, 110, 10, 10);
    ctx.fillRect(190, 120, 10, 10);
    ctx.fillRect(10, 130, 50, 10);
    ctx.fillRect(20, 140, 30, 10);
    ctx.fillRect(150, 130, 50, 10);
    ctx.fillRect(160, 140, 30, 10);
  });
  return (
    <canvas id="libra" width="200px" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
