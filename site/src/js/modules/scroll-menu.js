const $ = require("jquery");

module.exports = function() {
  // const $news = $(".news");
  // const $item = $(".menu__item");
  // const $wrapMenu = $(".wrap-menu");

  const $articles = $(".blog__post"),
    menu = {
      modifs: {
        fixed: "tabs__container-fixed",
        itemActive: "tabs__link-active"
      },
      $elem: $("#scroll_menu"),
      $items: $(".tabs__link")
    };

  let positionArticle = [],
    offsetHeight = 0, // верхнее смещение для скролла
    flagAnimation = true;

  // выполняем расчет позиций для каждой статьи
  const _setPositionArticle = function(elements) {
    elements.each(function(item) {
      // $(this) = статья
      positionArticle[item] = {};
      positionArticle[item].top = $(this).offset().top - offsetHeight;
      positionArticle[item].bottom =
        positionArticle[item].top + $(this).innerHeight();

      console.log(positionArticle); // positionArticle массив объектов с верхним и нижним отступом
    });
  };

  const _scrollPageFixMenu = function(e) {
    let scroll = window.pageYOffset;
    if (scroll < $articles.offset().top) {
      menu.$elem.removeClass(menu.modifs.fixed);
    } else {
      menu.$elem.addClass(menu.modifs.fixed);
    }

    // проверка на отступ сверху, если больше чем нужно ставим добавляем класс fixed
  };

  const _scrollPage = function(e) {
    const isFirstVision = function(element, current) {
      let scroll = window.pageYOffset;
      return (
        scroll >= element.top &&
        scroll < element.bottom &&
        !current.hasClass(menu.modifs.itemActive)
      );
    };
    positionArticle.forEach((element, index) => {
      let $currentElement = menu.$items.eq(index);
      if (isFirstVision(element, $currentElement)) {
        $currentElement
          .addClass(menu.modifs.itemActive)
          .siblings()
          .removeClass(menu.modifs.itemActive);
      }
    });
  };

  const _clickMenu = function(e) {
    if (flagAnimation) {
      flagAnimation = false;
      let $element = $(e.target);
      let index = $element.index();
      let sectionOffset = Math.ceil(positionArticle[index].top);
      $(document).off("scroll", _scrollPage);
      $element.siblings().removeClass(menu.modifs.itemActive);

      $("body, html").animate({ scrollTop: sectionOffset }, 1000, () => {
        $element.addClass(menu.modifs.itemActive);
        $(document).on("scroll", _scrollPage);
        flagAnimation = true;
      });
    }
  };

  const addListener = function() {
    $(window).one("load", function(e) {
      _setPositionArticle($articles);
      menu.$elem.on("click", _clickMenu);
      $(document).on("scroll", _scrollPage);
      $(document).on("scroll", _scrollPageFixMenu);
    });

    $(window).on("resize", function(e) {
      _setPositionArticle($articles);
    });
  };

  return {
    init: addListener
  };
};
