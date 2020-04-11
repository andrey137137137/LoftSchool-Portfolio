module.exports = function() {
  return {
    init: function() {
      var $preloader = document.getElementById("preloader"),
        $satellite = $preloader.querySelector(".preloader__satellite_circle"),
        $circle = $preloader.querySelector(".preloader__center_circle"),
        $counter = $preloader.querySelector(".preloader__counter"),
        $images = document.images,
        $imageClone,
        count = $images.length,
        // circleLength = 106.811,
        counter = 0,
        prs = 0;

      for (let i = 0; i < count; i++) {
        $imageClone = new Image();
        $imageClone.onload = imageLoaded;
        $imageClone.onerror = imageLoaded;
        $imageClone.src = $images[i].src;
      }

      function imageLoaded() {
        counter++;
        prs = Math.floor((counter * 100) / count);

        // setTimeout(function() {
        $preloader.classList.add(`preloader-prs_${prs}`);
        // $satellite.style.transform = `rotate(${prs * 7.2}deg)`;
        // $circle.style.strokeDasharray = `${(prs * circleLength) /
        //   100} ${circleLength}`;
        // $counter.innerHTML = prs;
        // }, 100);

        if (counter >= count) {
          setTimeout(function() {
            $preloader.classList.remove("preloader-active");
          }, 500);
          setTimeout(function() {
            $preloader.parentElement.removeChild($preloader);
          }, 1500);
        }
      }
    }
  };
};
