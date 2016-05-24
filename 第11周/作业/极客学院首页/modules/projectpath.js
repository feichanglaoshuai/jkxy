// 职业路径图
module.exports = function projectpath() {
  var t = t || {
  };
  t = {
    init: function () {
      this.blueline()
    },
    blueline: function () {
      $('.learn-card a').bind('mouseover', function () {
        $(this).css('border', '1px solid #35b558');
        var s = $('.learn-card a').size() - 1;
        $(this).index() != s && ($(this).index() + 1) % 5 != 0 && ($(this).css('borderRight', '0px'), $(this).next().css('borderLeft', '1px solid #35b558')),
        ($(this).index() + 1) % 5 == 0 && $(this).css('border', '1px solid #35b558'),
        $(this).index() > 4 && ($(this).index() + 1) % 5 != 0 && ($(this).css('border', '1px solid #35b558'), $(this).css('borderRight', '0px'), $(this).css('marginTop', '-1px')),
        $(this).index() > 4 && $(this).index() == s && ($(this).css('border', '1px solid #35b558'), $(this).css('marginTop', '-1px'))
      }),
      $('.learn-card a').bind('mouseout', function () {
        var s = $('.learn-card a').size() - 1;
        $(this).css('border', '1px solid #e4e4e4'),
        $(this).css('marginTop', '0px'),
        $(this).index() != s && ($(this).index() + 1) % 5 != 0 && $(this).css('borderRight', 'none'),
        $(this).index() > 4 && $(this).css('borderTop', '0px'),
        $(this).next().css('borderLeft', '1px solid #e4e4e4')
      })
    }
  },

  t.init();
}();
