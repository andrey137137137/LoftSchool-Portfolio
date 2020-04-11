"use strict";

const $ = require("jquery");

module.exports = function() {
  return {
    init: function() {
      var $flipBtn = $("#flip_2_back"),
        $container = $("#flip_container"),
        // btnHiddenClass = "authorization-hidden",
        flippedClass = "header__container-flipped";

      $flipBtn.click(function(event) {
        event.preventDefault();

        $flipBtn.fadeOut();
        $container.addClass(flippedClass);
      });

      $("#flip_2_front").click(function(event) {
        event.preventDefault();

        $container.removeClass(flippedClass);
        $flipBtn.fadeIn();
      });
    }
  };
};
