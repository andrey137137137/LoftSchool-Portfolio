module.exports = function() {
  return {
    $layers: false,
    isScroll: false,
    centerX: 0,
    centerY: 0,
    initialX: 0,
    initialY: 0,
    scrollY: 0,
    divider: 0,
    positionX: 0,
    positionY: 0,
    bottomPosition: 0,
    transformString: "",

    init: function() {
      var self = this,
        $parallaxContainer = document.getElementById("parallax");
      // $container;

      this.centerX = window.innerWidth / 2;
      this.centerY = window.innerHeight / 2;

      var moveLayers = function(event) {
        if (self.isScroll) {
          self.scrollY =
            window.pageYOffset || document.documentElement.scrollTop;
        }

        self.initialX = self.isScroll
          ? self.centerX
          : self.centerX - event.pageX;
        self.initialY = self.isScroll
          ? self.centerY - self.scrollY
          : self.centerY - event.pageY;

        if (self.$layers) {
          [].slice.call(self.$layers).forEach(function($layer, index) {
            if (self.isScroll) {
              self.divider = (index + 1) / 90;
            } else {
              self.divider = (index + 1) / 110;
            }

            self.positionY = self.initialY * self.divider;
            self.bottomPosition = (window.innerHeight / 2) * self.divider;

            if (self.isScroll) {
              self.transformString = "translateY(" + self.positionY + "px)";
            } else {
              self.positionX = self.initialX * self.divider;
              self.transformString =
                "translate(" + self.positionX + "px," + self.positionY + "px)";
            }

            $layer.style.transform = self.transformString;
            $layer.firstElementChild.style.bottom =
              "-" + self.bottomPosition + "px";
          });
        }
      };

      if ($parallaxContainer) {
        if ($parallaxContainer.classList.contains("parallax-scroll")) {
          self.isScroll = true;
          console.log(self.isScroll);
        }

        // $container = $parallaxContainer.firstElementChild
        self.$layers = $parallaxContainer.children;

        if (self.isScroll) {
          window.addEventListener("scroll", moveLayers);
          window.dispatchEvent(new Event("scroll"));
        } else {
          window.addEventListener("mousemove", moveLayers);
        }
      }
    }
  };
};
