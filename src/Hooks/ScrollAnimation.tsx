export function ScrollAnimation(path: string, bk: number) {
  const svg: any = document.getElementById("Path_1");
  const length = svg.getTotalLength();

  console.log(length, "length");

  // start positioning of svg drawing
  svg.style.strokeDasharray = length;

  // hide svg before scrolling starts
  svg.style.strokeDashoffset = length;

  window.addEventListener("scroll", function () {
    const scrollpercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    const draw = length * scrollpercent * 3;
    console.log(length, "length");

    console.log(draw, "Draw");

    if (bk === 0) {
      svg.style.strokeDashoffset = length - draw;
    } else if (draw >= 940) {
      let draw2 = length * scrollpercent - 940;
      svg.style.strokeDashoffset = length - draw2 * 2;
    } else {
      // hide svg before scrolling starts
      svg.style.strokeDashoffset = length;
    }

    // Reverse the drawing when scroll upwards
  });
}
