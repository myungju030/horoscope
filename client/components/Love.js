import { useEffect } from "react";

export default function Love() {
  useEffect(() => {
    var canvas = document.getElementById("love");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.fillRect(10, 0, 10, 10);
    ctx.fillRect(20, 0, 10, 10);
    ctx.fillRect(60, 0, 10, 10);
    ctx.fillRect(70, 0, 10, 10);

    ctx.fillRect(0, 10, 10, 10);
    ctx.fillRect(10, 10, 10, 10);
    ctx.fillRect(20, 10, 10, 10);
    ctx.fillRect(30, 10, 10, 10);
    ctx.fillRect(50, 10, 10, 10);
    ctx.fillRect(60, 10, 10, 10);
    ctx.fillRect(70, 10, 10, 10);
    ctx.fillRect(80, 10, 10, 10);

    ctx.fillRect(0, 20, 10, 10);
    ctx.fillRect(10, 20, 10, 10);
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(30, 20, 10, 10);
    ctx.fillRect(40, 20, 10, 10);
    ctx.fillRect(50, 20, 10, 10);
    ctx.fillRect(60, 20, 10, 10);
    ctx.fillRect(70, 20, 10, 10);
    ctx.fillRect(80, 20, 10, 10);

    ctx.fillRect(10, 30, 10, 10);
    ctx.fillRect(20, 30, 10, 10);
    ctx.fillRect(30, 30, 10, 10);
    ctx.fillRect(40, 30, 10, 10);
    ctx.fillRect(50, 30, 10, 10);
    ctx.fillRect(60, 30, 10, 10);
    ctx.fillRect(70, 30, 10, 10);

    ctx.fillRect(20, 40, 10, 10);
    ctx.fillRect(30, 40, 10, 10);
    ctx.fillRect(40, 40, 10, 10);
    ctx.fillRect(50, 40, 10, 10);
    ctx.fillRect(60, 40, 10, 10);

    ctx.fillRect(30, 50, 10, 10);
    ctx.fillRect(40, 50, 10, 10);
    ctx.fillRect(50, 50, 10, 10);

    ctx.fillRect(40, 60, 10, 10);
  });
  return (
    <canvas id="love" width="100px" height="70px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
