export function useMovingObj(path1:string,path2:string){

      //Moving Image
      const svg: any = document.getElementById(`${path1}`);
      var social: any = document.querySelector(`${path2}`);
      var socialElem: any = document.getElementById("socialKofuku");

      social.style.opacity = 0;
      var socialWidth = 40;
      var socialHeight = 40;
      function updateImagePosition(offset: number) {
        // console.log(offset, "Offset");
        if (offset == 0) {
          social.style.opacity = 0;
          social.classList.remove("moveBottom");
          socialElem.classList.remove("atHeader");

        } else {
          social.style.opacity = 1;
          // social.style.transition='1s'
          social.classList.remove("moveBottom");
          socialElem.classList.remove("atHeader");


        }
        if (offset > 0.6696022727272727) {
          social.style.opacity = 1;
          social.classList.add("moveBottom");
          socialElem.classList.add("atHeader");
        }
        let pt = svg.getPointAtLength(offset * svg.getTotalLength());
        // social.style.display = "block";
        social.setAttribute("x", pt.x - socialWidth / 2);
        social.setAttribute("y", pt.y - socialHeight / 2);
        // social.style.transition = "stroke-dashoffset 1s ease";
        // console.log(pt.x - socialWidth / 2,"=",pt.y - socialWidth / 2)
      }
  
      function getScrollFraction() {
        var h: any = document.documentElement,
          b: any = document.body,
          st: any = "scrollTop",
          sh: any = "scrollHeight";
        return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 12;
      }
  
      function onScroll() {
        updateImagePosition(getScrollFraction());
      }
  
      updateImagePosition(0);
  
      window.addEventListener("scroll", onScroll);
}