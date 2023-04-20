import { useEffect } from "react";

export default function Gemini() {
  useEffect(() => {
    var canvas = document.getElementById("gemini");
    var ctx = canvas.getContext("2d");

    //쌍둥이자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(40, 80, 10, 10);
    ctx.fillRect(30, 90, 10, 10);
    ctx.fillRect(40, 80, 10, 10);
    ctx.fillRect(50, 80, 10, 10);
    ctx.fillRect(60, 80, 10, 10);
    ctx.fillRect(70, 80, 10, 10);
    ctx.fillRect(80, 90, 10, 10);
    ctx.fillRect(80, 100, 10, 10);
    ctx.fillRect(80, 110, 10, 10);
    ctx.fillRect(70, 120, 10, 10);
    ctx.fillRect(60, 120, 10, 10);
    ctx.fillRect(50, 120, 10, 10);
    ctx.fillRect(40, 120, 10, 10);
    ctx.fillRect(30, 110, 10, 10);
    ctx.fillRect(30, 100, 10, 10);
    ctx.fillRect(40, 100, 10, 10);
    ctx.fillRect(60, 100, 10, 10);
    ctx.fillRect(70, 100, 10, 10);

    ctx.fillRect(150, 80, 10, 10);
    ctx.fillRect(140, 80, 10, 10);
    ctx.fillRect(130, 80, 10, 10);
    ctx.fillRect(120, 80, 10, 10);
    ctx.fillRect(110, 90, 10, 10);
    ctx.fillRect(110, 90, 10, 10);
    ctx.fillRect(110, 100, 10, 10);
    ctx.fillRect(110, 110, 10, 10);
    ctx.fillRect(110, 110, 10, 10);
    ctx.fillRect(110, 110, 10, 10);
    ctx.fillRect(120, 120, 10, 10);
    ctx.fillRect(130, 120, 10, 10);
    ctx.fillRect(140, 120, 10, 10);
    ctx.fillRect(150, 120, 10, 10);
    ctx.fillRect(160, 110, 10, 10);
    ctx.fillRect(160, 110, 10, 10);
    ctx.fillRect(160, 100, 10, 10);
    ctx.fillRect(160, 90, 10, 10);
    ctx.fillRect(150, 100, 10, 10);
    ctx.fillRect(130, 100, 10, 10);
    ctx.fillRect(120, 100, 10, 10);
    ctx.fillRect(170, 120, 10, 10);
    ctx.fillRect(170, 130, 10, 10);
    ctx.fillRect(20, 120, 10, 10);
    ctx.fillRect(20, 130, 10, 10);
  });
  return (
    <canvas id="gemini" width="200px" height="200px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
