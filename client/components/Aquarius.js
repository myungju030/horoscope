export default function Aquarius() {
  if (typeof document !== "undefined") {
    var canvas = document.getElementById("aquarius");
    var ctx = canvas.getContext("2d");

    //물병자리
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(50, 60, 10, 10);
    ctx.fillRect(60, 60, 10, 10);
    ctx.fillRect(70, 60, 10, 10);
    ctx.fillRect(80, 60, 10, 10);
    ctx.fillRect(90, 60, 10, 10);
    ctx.fillRect(100, 60, 10, 10);
    ctx.fillRect(110, 60, 10, 10);
    ctx.fillRect(120, 60, 10, 10);
    ctx.fillRect(130, 60, 10, 10);
    ctx.fillRect(140, 60, 10, 10);

    ctx.fillRect(70, 70, 10, 10);
    ctx.fillRect(70, 80, 10, 10);
    ctx.fillRect(70, 90, 10, 10);
    ctx.fillRect(60, 90, 10, 10);
    ctx.fillRect(50, 90, 10, 10);
    ctx.fillRect(50, 100, 10, 10);
    ctx.fillRect(50, 110, 10, 10);
    ctx.fillRect(50, 120, 10, 10);
    ctx.fillRect(50, 130, 10, 10);
    ctx.fillRect(50, 140, 10, 10);
    ctx.fillRect(50, 150, 10, 10);
    ctx.fillRect(60, 160, 10, 10);
    ctx.fillRect(70, 170, 10, 10);
    ctx.fillRect(80, 170, 10, 10);
    ctx.fillRect(90, 170, 10, 10);

    ctx.fillRect(120, 70, 10, 10);
    ctx.fillRect(120, 80, 10, 10);
    ctx.fillRect(120, 90, 10, 10);
    ctx.fillRect(130, 90, 10, 10);
    ctx.fillRect(140, 90, 10, 10);
    ctx.fillRect(140, 100, 10, 10);
    ctx.fillRect(140, 110, 10, 10);
    ctx.fillRect(140, 120, 10, 10);
    ctx.fillRect(140, 130, 10, 10);
    ctx.fillRect(140, 140, 10, 10);
    ctx.fillRect(140, 150, 10, 10);
    ctx.fillRect(130, 160, 10, 10);
    ctx.fillRect(120, 170, 10, 10);
    ctx.fillRect(110, 170, 10, 10);
    ctx.fillRect(100, 170, 10, 10);

    ctx.fillRect(40, 100, 10, 10);
    ctx.fillRect(30, 110, 10, 10);
    ctx.fillRect(30, 120, 10, 10);
    ctx.fillRect(30, 130, 10, 10);
    ctx.fillRect(40, 140, 10, 10);

    ctx.fillRect(150, 100, 10, 10);
    ctx.fillRect(160, 110, 10, 10);
    ctx.fillRect(160, 120, 10, 10);
    ctx.fillRect(160, 130, 10, 10);
    ctx.fillRect(150, 140, 10, 10);

    ctx.fillRect(50, 10, 10, 10);
    ctx.fillRect(70, 30, 10, 10);
    ctx.fillRect(90, 20, 10, 10);
    ctx.fillRect(110, 40, 10, 10);
    ctx.fillRect(130, 10, 10, 10);
  }
  return (
    <canvas id="aquarius" width="500px" height="550px">
      Your browser does not support the canvas element.
    </canvas>
  );
}
