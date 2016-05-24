// 左侧导航
module.exports = function leftnav() {
  var t = t || {
  };

  t = {
    init: function () {
      this.classify()
    },
    classify: function () {
      function i() {
        var i = $(this).find('.lesson-list-show'),
        s = i.find('div').length,
        n = 400 * s,
        t = i.height(),
        l = $(window).height();
        t > l ? (i.width(590), $(this).find('.lesson-list-show>div').width(590))  : (i.width(n), $(this).find('.lesson-list-show>div').width(n))
      }
      var s = 13,
      n = $('.lesson-classfiy-nav>ul>li');
      n.size() > s && $('.lesson-classfiy-nav>ul>li:gt(' + s + ')').remove(),
      $('.lesson-classfiy-nav li').bind('mouseover', i)
    }
  },

  t.init();
}();


