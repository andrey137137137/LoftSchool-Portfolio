const $ = require("jquery");

module.exports = function() {
  return {
    $slides: false,
    $activeSlide: false,

    init: function(id = "slider") {
      console.log("Slider script");

      this.$slides = $("#" + id).find(".slider__item");

      if (!this.$slides.length) {
        return;
      }

      var self = this,
        $prevSlide,
        $nextSlide,
        $firstSlide,
        $lastSlide;

      $(".slider__arrow").click(function(event) {
        event.preventDefault();

        var $this = $(this);

        self.$activeSlide = self.$slides.filter(".slider__item-active");
        $prevSlide = self.$activeSlide.prev();
        $nextSlide = self.$activeSlide.next();
        $firstSlide = self.$slides.first();
        $lastSlide = self.$slides.last();

        if ($this.hasClass("slider__arrow-next")) {
          if ($nextSlide.index() >= 0) {
            self.moveSlide($nextSlide, "forward");
          } else {
            self.moveSlide($firstSlide, "forward");
          }
        } else if ($this.hasClass("slider__arrow-prev")) {
          if ($prevSlide.index() >= 0) {
            self.moveSlide($prevSlide, "backward");
          } else {
            self.moveSlide($lastSlide, "backward");
          }
        }
      });
    },

    moveSlide: function($slide, direction) {
      var self = this,
        $movableSlide = $slide,
        count = this.$slides.length,
        duration = 500;

      $movableSlide.css("opacity", 0).addClass("slider__item-movable");

      // this.$activeSlide.animate({'opacity': 0}, duration);
      $movableSlide.animate({ opacity: 1 }, duration, function() {
        var $this = $(this);

        // $slides.css('opacity', 0).removeClass('active');
        self.$slides.removeClass("slider__item-active");
        $this.toggleClass("slider__item-movable slider__item-active");
      });
    }
  };
};
