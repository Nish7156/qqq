export function ScrollAnimationCommon(
  targetElement: string,
  svgPath: string,
  speed:number=2
) {
  let ticking = false;
  let last_known_scroll_position = 0;
  let updatePath = false;

  const element: any = document.querySelector(`#${targetElement}`);
  const path: any = document.querySelector(`#${svgPath}`);
  
  let totalLength = 0;

  initPath(path);

  function initPath(path: any) {
    totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = totalLength;
  }

  function handleEntries(entries: any) {
    // console.log(entries);
    entries.forEach((entry: any) => {
      // console.log(entry, "NonTarget");
      if (entry.isIntersecting) {
        // console.log(entry.target, "Target");
      }
    });
  }

  let observer = new IntersectionObserver(
    (entries, observer) => {
      handleEntries(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          updatePath = true;
          console.log(updatePath,"++++");
          
        } else {
          updatePath = false;
          console.log(updatePath,"----");
          
        }
      });
    },
    { rootMargin: "0px 0px 0px 0px" }
  );

  observer.observe(element);

  function doSomething(scroll_pos: any) {
    if (!updatePath) {
      return;
    }
    window.requestAnimationFrame(() => {
      const center = window.innerHeight / 2;
      const boundaries = path.getBoundingClientRect();
      const top = boundaries.top;
      const height = boundaries.height;
      const percentage = (center - top) / height;
      console.log(percentage,"percentage");
      
      const drawLength = percentage > 0 ? totalLength * percentage * speed : 0;
      console.log(drawLength,"drawLength");
      
      path.style.strokeDashoffset =
        drawLength < totalLength ? totalLength - drawLength : 0;
      path.style.transition = "stroke-dashoffset 0.2s ease";
      // console.log(drawLength,"drawLength",path);
      
    });
  }

  window.addEventListener("scroll", function (e) {
    last_known_scroll_position = window.scrollY;
    console.log(last_known_scroll_position,"Scroll");
    
    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  });
}
