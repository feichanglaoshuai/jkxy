// 轮播图
module.exports = function jkswiper() {
  var Swiper = require("./swiper");

  var a = {
  };
  a = {
    init: function () {
      this.banner()
    },
    banner: function () {
      function n(n, e, r) {
        $(n).mouseover(function () {
          $(n).removeClass(e).addClass(r)
        }),
        $(n).mouseout(function () {
          $(n).removeClass(r).addClass(e)
        })
      }
      var e = new Swiper('.banner-box', {
        pagination: '.pagination',
        loop: !0,
        slidesPerView: 1,
        speed: 1000,
        autoplay: 5000,
        grabCursor: !0,
        paginationClickable: !0
      });
      $('.index-banner').hover(function () {
        e.stopAutoplay(),
        $('#banner-left,#banner-right').stop(!0, !0),
        $('#banner-left,#banner-right').fadeIn()
      }, function () {
        e.startAutoplay(),
        $('#banner-left,#banner-right').fadeOut()
      }),
      n('#banner-left,#banner-left2,#banner-left3', 'arrow-left', 'arrow-left2'),
      n('#banner-right,#banner-right2,#banner-right3', 'arrow-right', 'arrow-right2'),
      $('#banner-left').click(function () {
        e.swipePrev()
      }),
      $('#banner-right').click(function () {
        e.swipeNext()
      })
    }
  },

  a.init();
}();
